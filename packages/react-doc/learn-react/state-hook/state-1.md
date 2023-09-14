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

# 객체 state

state에 있는 객체를 직접 변이해서는 안된다.

객체를 업데이트하려면, 새 객체를 생성하고 복사본을 적용하도록 state를 설정해야한다.



## 변이란 무엇인가 <a href="#whats-a-mutation" id="whats-a-mutation"></a>

숫자, 문자열, boolean과 같은 값은 변이할 수 없거나 읽기 전용이다. 그렇기에 렌더링을 다시 Trigger 하여 값을 바꿀 수 있다.

```jsx
setX(5);
```

x가 0에서 5로 변경되었지만 숫자 0 자체가 변경된 것이 아닌 교체가 된 것이다.

js에서는 숫자 / 문자열 / 불리언과 같은 원시 자료형 값을 변경할 수 없다.



하지만 객체는 참조형 값이기 때문에 기술적으로 객체 자체의 내용 변경이 가능하다.&#x20;

이를 변이(mutation)라고 한다.



**React State의 객체는 기술적으로는 변이할 수 있으나, 우리는 원시 자료형과 같이 불변하는 것처럼 취급해야 한다.**

## state를 읽기 전용으로 취급하자

```jsx
onPointerMove={e => {
  position.x = e.clientX;
  position.y = e.clientY;
}}
```

이 코드는 포인터 이동시(onPointerMove) 트리거 되는 이벤트 핸들러이다.

이 코드가 잘못된 이유는 state 값을 직접 수정한다. 하지만 설정자 함수 (setState)를 사용하지 않으면 React는 객체가 변이되었다는 사실을 알지 못한다.

그래서 렌더링이 일어나지 않는다.

객체의 state의 리렌더링을 Trigger 하려면 새 객체를 생성하고 setState를 해야한다.



## 변이 없이 배열 업데이트하기

<table><thead><tr><th width="126"> </th><th> mutates the array</th><th>returns a new array </th></tr></thead><tbody><tr><td>adding<br><strong>추가</strong></td><td><code>push</code>, <code>unshift</code></td><td><code>concat</code>, <code>[...arr]</code> spread syntax</td></tr><tr><td>removing<br><strong>삭제</strong></td><td><code>pop</code>, <code>shift</code>, <code>splice</code></td><td><code>filter</code>, <code>slice</code></td></tr><tr><td>replacing<br><strong>교체</strong></td><td><code>splice</code>, <code>arr[i] = ...assignment</code></td><td><code>map</code></td></tr><tr><td>sorting<br><strong>정렬</strong></td><td><code>reverse</code>, <code>sort</code></td><td>copy the array first</td></tr></tbody></table>

{% hint style="danger" %}
slice / splice

* `slice`는 배열 또는 배열의 일부를 복사할 수 있다.
* `splice`는 배열을 항목을 삽입하거나 삭제하기 위해 **변이한다**.
{% endhint %}
