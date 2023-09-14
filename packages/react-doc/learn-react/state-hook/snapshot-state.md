# snapshot으로써의 state

state는 js 변수처럼 보일 수 있지만, 스냅샷 처럼 동작한다.

state 변수를 설정해도 이미 가지고 있는 state 변수는 변경되지 않고 대신 리렌더링이 실행된다.\


## 렌더링은 그 시점의 snapshot이다

"렌더링" 이란 React가 컴포넌트(함수)를 호출한다는 뜻이다.

함수에서 반환하는 jsx는 시간상 스냅샷과 같다.

### 리렌더링 할때 일어나는 일

1. React가 컴포넌트(함수)를 호출한다.
2. 함수가 새로운 jsx 스냅샷을 반환한다.
3. React가 반환한 스냅샷과 일치하도록 화면을 업데이트한다.

<figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>



### 컴포넌트는 해당 렌더링의 state 값을 사용해 계산된 새로운 스냅샷을 JSX에 반환한다

1. React에게 State를 업데이트하도록 명령
2. React가 State값을 업데이트
3. React가 State 값의 스냅샷을 컴포넌트에 보냄

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>



## setState가 실행 블록 안에서 여러번 호출되었을때

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

```

number의 값을 기준으로 + 1을 3번 실행하였다.

1. 리액트는 다음 렌더링에서 number(0) + 1을 지시한다.
2. 다음 렌더링에서 number(0) + 1을 지시한다.
3. 다음 렌더링에서도 number(0) + 1을 지시한다.

세 번 호출했지만, 이 렌더링에서 이벤트 핸들러 안에서의 `number`는 항상 `0`이므로 state를 `1`로 세 번 설정한다.

{% hint style="info" %}
**state를 설정하면 다음 렌더링에 대해서만 변경된다.**\
첫 번째 렌더링에서 number는 0이다.\
따라서 해당 렌더링에서 setNumber(number + 1)가 호출된 후에도 **number** **의 값은 여전히 0이다.**
{% endhint %}



## 시간 경과에 따른 State

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number);
      }}>+5</button>
    </>
  )
}
```

```jsx
setNumber(0 + 5);
alert(0);
```

* snapshot 기준으로 치환해보았을때 setState 업데이트 전에 이미 값이 바인딩 되었으므로 0이 노출된다.
* setTimeout으로 딜레이를 해도 마찬가지이다. **이미 상호작용하기 전에 예약(고정)되어 있었기 때문이다.**
* 코드가 비동기적이더라도, 렌더링 내에서 절대 변경되지 않는다.



## 실습 - 신호등 알림

{% embed url="https://codesandbox.io/embed/awesome-sky-lgcpxy?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=editor" %}

> 클릭 핸들러에 `alert`을 추가하세요. 표시등이 녹색이고 “걷기”라고 표시되면 버튼을 클릭하면 “다음은 정지입니다.”라고 표시되어야 합니다. 표시등이 빨간색이고 “중지”라고 표시되면 버튼을 클릭하면 “다음은 걷기입니다”라고 표시되어야 합니다.\
> \
> `alert`를 `setWalk`호출 전이나 후에 넣는 것이 차이가 있나요?

&#x20;

`setWalk` 호출 앞에 넣든 뒤에 넣든 아무런 차이가 없다.

해당 렌더링의 `walk` 값은 고정되어 있어서 `setWalk`를 호출하면 다음 렌더링에 대해서만 변경되고, 이전 렌더링의 이벤트 핸들러에는 영향을 주지 않는다.

{% hint style="info" %}
리렌더링은 **모든 이벤트 핸들러의 코드가 실행될때까지 기다리기 때문이다.**
{% endhint %}

따라서 클릭시 `walk`가 `false`로 설정된 **렌더링이 대기열에 추가되고 alert이 실행된다.**
