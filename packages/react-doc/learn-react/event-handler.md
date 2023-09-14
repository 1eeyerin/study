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

# event handler에 전달할때 함수 호출을 조심하자

## 🙆🏻‍♀️ 올바른 함수 전달&#x20;

```jsx
<button onClick={handleClick}>
<button onClick={() => alert('...')}>
```

해당 코드는 이벤트 핸들러로 함수를 전달한다.

React는 이를 기억하고 사용자가 버튼을 누를때만 함수를 호출한다.

인라인 함수 정의시에는 렌더링할 때마다 코드를 실행하지 않고 호출할 함수를 생성한다.

## 🙅🏻‍♀️ 잘못된 함수 전달&#x20;

```jsx
<button onClick={handleClick()}>
<button onClick={alert('...')}>
```

해당 코드는 클릭 없이 렌더링 중에 즉시 함수를 실행한다.

그 이유는, jsx 내부에서 {} js가 바로 실행되기 때문이다.

이런 코드는 컴포넌트가 렌더링 될 때마다 실행한다.

