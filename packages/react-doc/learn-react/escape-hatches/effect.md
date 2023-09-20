---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Effect와 동기화하기

```jsx
function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
    // 여기의 코드는 매 렌더링 후에 실행됩니다.
  });
  return <div />;
}
```

useEffect는 해당 렌더링 화면에 반영이 될 때까지 **코드 조각의 실행을 "지연"한다.**



## 비디오 플레이어로 video의 `play()`를 조작하는 경우

```jsx
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  if (isPlaying) {
    ref.current.play();  // Calling these while rendering isn't allowed.
  } else {
    ref.current.pause(); // Also, this crashes.
  }

  return <video ref={ref} src={src} loop playsInline />;
}
```

해당코드는 에러가 난다. 해당 프로퍼티를 읽을 수 없기 때문이다.

**렌더링 중에 DOM 노드로 무언가를 시도하면 안된다.**

렌더링은 <mark style="color:blue;">**JSX의**</mark> <mark style="color:blue;">**순수한 계산**</mark>이어야 하며 DOM 수정과 같은 side effect를 포함해서는 안된다.

또한 VideoPlayer가 처음 호출될때 DOM은 **아직 존재하지 않는다**.

React는 JSX를 반환하기 전까지는 **어떤 DOM을 생성할지 모르기 때문이다.**

그렇기에 play() 또는 pause를 **실행할 DOM 노드 자체가 아직 없는 상태이다.**



해결책은 side effect를 **`useEffect`**로 감싸 **렌더링 계산 밖**으로 옮기는 것이다.

DOM 업데이트를 Effect로 감싸면 React가 먼저 화면을 업데이트 할 수 있도록 한다. 그 다음에 useEffect가 실행이 된다.

{% hint style="danger" %}
**useEffect의 무한 굴레**\
\
useEffect(() => { \
&#x20;   setCount(count + 1);\
});



Effect는 매번 **렌더링 이후**에 **렌더링의 결과로** 실행한다.

setState는 렌더링을 하도록 유도한다.\
\
1\. 렌더링 완료 후 useEffect 실행\
2\. 리렌더링 유도\
3\. 렌더링 완료 후 useEffect 실행\
4\. 리렌더링 유도\
... 무한 반복
{% endhint %}

## 의존성 배열

의존성 배열은 여러 개의 의존성을 포함할 수 있다.

React는 지정한 모든 의존성의 값이 이전 렌더링 때와 정확히 동일한 경우에만 Effect의 재실행을 건너뛴다.

**의존성은 선택할 수 없다.**

의존성은 Effect 내부 코드를 기반으로 이루어지며 일치하지 않으면 lint 오류가 발생한다.

만약 일부 의존성 값을 포함하고 싶지 않다면, 필요하지 않도록 코드를 고치자.

```jsx
useEffect(() => {
  // This runs after every render
  // 렌더시마다 실행됩니다.
});

useEffect(() => {
  // This runs only on mount (when the component appears)
  // 오직 마운트시(컴포넌트가 나타날 때)에만 실행됩니다.
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
  // 마운트시 뿐만 아니라 a 또는 b가 직전 렌더와 달라졌을 때에도 실행됩니다.
}, [a, b]);
```

## 의존성 배열에 Ref가 생략된 이유

```jsx
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
```

ref 객체는 안정적인 정체성을 가지고 있기 때문에 렌더할때마다 항상 동일한 객체를 얻을 수 있도록 보장한다.

절대 변하지 않으므로 useEffect가 다시 실행되지 않으므로 포함여부는 중요하지 않다.

setState도 안정적인 정체성을 가지므로 생략될 수 있다.



하지만 언제나 안정적인 의존성을 가지고 있는 것은 아니다. 이는 linter가 확인될 때에만 동작된다.&#x20;

부모 컴포넌트에서 ref가 전달된 경우 항상 동일한 ref를 전달 받는지 모를 수 있기에 달라질 수 있다.
