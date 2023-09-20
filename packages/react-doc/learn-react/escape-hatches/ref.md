# Ref

React가 특정 정보를 기억하도록 하고 싶지만 새 렌더링을 촉발시키고 싶지 않은 경우 ref를 사용할 수 있다.

```jsx
const ref = useRef(0);
```

useRef는 다음과 같은 객체를 반환한다.

값에 엑세스 하려면, ref.current 속성을 사용한다.

이 값은 의도적으로 변이가 가능하고 읽기 & 쓰기가 가능하다.

```jsx
{ 
  current: 0
}
```



## 실습: 잘못된 Chat Input 고치기

{% embed url="https://codesandbox.io/embed/upbeat-pascal-ukotpt?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=editor" %}

메세지를 입력하고  "Send"를 클릭하면 3초 뒤에 Alert이 뜬다.\
"Undo"를 누르면 ClearTimeout이 되어서 Alert이 뜨면 안된다.

작동하지 않는 이유는?

{% hint style="info" %}
timeoutID와 같은 일반 변수는 (**let**) 렌더링할때마다 **컴포넌트를 처음부터 실행하고 **<mark style="color:blue;">**초기화**</mark>**하기 때문에** 리렌더링 사이에서 <mark style="color:blue;">**"살아남지"**</mark>** 못한다.**\
\
렌더링 사이에서도 살아남기 위해 **Ref**에 저장하여야한다.
{% endhint %}

## Ref  콜백을 사용하여 Refs 목록을 관리하는 방법

```jsx
<ul>
  {items.map((item) => {
    // Doesn't work! 작동하지 않습니다!
    const ref = useRef(null);
    return <li ref={ref} />;
  })}
</ul>
```

ref를 목록 수만큼 정의해두었다. 하지만 이는 작동하지 않는다.

왜냐면 **훅은 컴포넌트의 최상위 레벨에서만 호출해야하기 때문이다.**

반복문 또는 map내부에서 useRef를 호출할 수 없다.



이 문제를 해결할 수 있는 단 한가지 방법은 부모 엘리먼트에 대한 단일 ref를 가져온 다음 `querySelectorAll` 과 같은 DOM 조작 메서드를 이용하여 개별 노드를 찾는 것이다.

하지만 해당 방법은 DOM 구조가 변경되면 깨질 수 있다.

다른 방법은 **`ref={() => }`** 속성에 함수를 전달하는 것이다. 이를 ref 콜백이라 하는데, ref를 설정할 때가 되면 DOM 노드로, 지울때가 되면 null로 콜백을 호출한다.

이를 통해 자신만의 배열이나 Map을 유지하고 모든 ref에 접근할 수 있다.

{% embed url="https://codesandbox.io/embed/lively-dew-dl8lsj?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=editor" %}



## 다른 컴포넌트의 DOM 노드에 접근하기 <a href="#accessing-another-components-dom-nodes" id="accessing-another-components-dom-nodes"></a>

React가 다른 컴포넌트 및 자식 컴포넌트 DOM 노드에 접근하는 것을 허용하지 않는다. 다른 컴포넌트를 수동으로 조작하면 코드가 취약해질 수 있기 때문이다.

하지만 DOM 노드를 노출하길 원하는 컴포넌트에서는 설정이 필요하기 때문에 이런 경우에는 자신의 ref를 자식 중 하나에 전달할 수 있도록 지정할 수 있다.

## 특정 작업만 보내고 싶을 때 <a href="#accessing-another-components-dom-nodes" id="accessing-another-components-dom-nodes"></a>

```jsx
import {
  forwardRef, 
  useRef, 
  useImperativeHandle
} from 'react';

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

```

ref를 전체 내려주는 경우 부모 컴포넌트가 다른 작업을 실행할 수도 있을 것이다.

드물지만 노출되는 기능을 제한하고 싶을 때 **`useImperativeHandle`** 를 사용하면 된다. 이때의 데이터는 DOM 노드가 아닌, 내부에서 생성한 사용자 정의 객체이다.



## **플러싱 state는 flushSync와 동기식으로 업데이트된다**

{% embed url="https://codesandbox.io/embed/strange-alex-vwl8f7?fontsize=14&hidenavigation=1&module=/App.js&theme=light" %}

위 코드는 새 할일을 추가하고 해당 할일 항목까지 스크롤하는 코드를 만드려고 할때, sync가 안 맞고 바로 직전 항목으로 스크롤 된다.

```jsx
setTodos([ ...todos, newTodo]);
listRef.current.lastChild.scrollIntoView();
```

해당 코드가 문제인건데, React에서는 state 업데이트가 큐에 등록된다.

setState가 DOM을 즉시 업데이트 하지 않기 때문에 스크롤 할때는 아직 추가되지 않은 상태이다.

이 문제를 해결하려면, React가 DOM을 동기적으로 업데이트 ("flush") 하도록 강제할 수 있는데 react-dom에서 **`flushSync`**를 import 하면 된다.

```jsx
flushSync(() => {
  setTodos([ ...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView();
```

이렇게 하면 flushSync로 감싼 코드가 <mark style="color:blue;">**실행된 직후 React가 DOM을 동기적으로 업데이트 하도록 지시한다.**</mark>



## ref를 이용한 DOM 조작 모범 사례

DOM을 수동으로 수정하려고 하면 React가 수행하는 변경 사항과 충돌될 위험이 있다.

1. React가 관리하는 DOM노드를 변경하지 말자. 충돌이 발생할 수 있다.
2. React가 업데이트 할 이유가 없는 DOM은 수정해도 안전하다.
