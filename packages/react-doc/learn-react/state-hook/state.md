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

# state 업데이트를 큐에 담기

## state 업데이트 일괄처리  <a href="#react-batches-state-updates" id="react-batches-state-updates"></a>

```jsx
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);
```

React는 state를 업데이트 하기 전에 이벤트의 모든 코드가 실행될 때까지 기다린다.

이 때문에 **리렌더링은 모든** `setNumber()` **호출이 완료된 이후에만** 일어납니다.

이렇게 하면 너무 많은 리렌더링을 일으키지 않고도 여러 컴포넌트에서 나온 다수의 state 변수를 업데이트할 수 있다.\
\
React는 **클릭과 같은 여러 의도적인 이벤트에 대해 일괄 처리하지 않으며**, 각 클릭은 개별적으로 처리됩니다.

## 렌더링 전에 여러번 업데이트 하고 싶다면..  <a href="#react-batches-state-updates" id="react-batches-state-updates"></a>

다음 렌더링 전에 동일한 state 변수를 여러 번 업데이트 하고 싶다면 ㄴstate 값을 전달하는 대신, `setNumber(n => n + 1)` 와 같이 이전 state를 기반으로 다음 state를 계산하는 함수를 전달한다.

> n => n + 1 는 \*\*업데이터 함수(updater function)\*\*라고 부른다.

```jsx
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);
```

1. n + 1을 큐에 넣는다.
2. n + 1을 큐에 넣는다.
3. n + 1을 큐에 넣는다.

state값을 계산할때 기존 값에서 +1을 하기 때문에 계속 n + 1을 하게 된다.

## state를 교체하고 업데이트 한다면?

```jsx
const [number, setNumber] = useState(0);
  
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

이 코드는 다음 렌더링에서 어떻게 될까?

1. 0 + 5 => 5로 등록되도록 큐에 등록됨
2. n + 1이 큐에 등록됨
3. 5 + 1이 되어 6이 됨

```jsx
const [number, setNumber] = useState(0);
  
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

&#x20;해당 코드는 다음 렌더링에서 어떻게 될까?

1. 0 + 5 => 5로 등록되도록 큐에 등록됨
2. n + 1이 큐에 등록됨
3. 5 + 1이 되어 6이 됨
4. 해당 값을 42로 변경시키는 큐가 등록됨
5. 42가 됨

{% hint style="warning" %}
이벤트 핸들러가 완료되면 React는 리렌더링을 실행한다.

리렌더링하는 동안 React는 큐를 처리한다.

업데이터 함수는 렌더링 중에 실행되므로, **업데이터 함수는 순수해야 하며 결과만 반환해야 한다**.\
\
그렇기에 <mark style="color:red;">**업데이터 함수 내부에서 state를 변경하거나 다른 사이드 이팩트를 실행하는 것을 하지 말아야 한다.**</mark>
{% endhint %}

## 실습 - state 큐를 직접 구현해보기

{% embed url="https://codesandbox.io/embed/ancient-fog-prf599?fontsize=14&hidenavigation=1&module=/processQueue.js&theme=light&view=preview" %}
