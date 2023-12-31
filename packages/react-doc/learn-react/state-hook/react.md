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

# React 렌더링

> 렌더링은 React에서 컴포넌트를 호출하는 것이다.

1. **첫 렌더링에서** React는 Root 컴포넌트를 호출한다.
2. appendChild() DOM API를 사용하여 생성한 모든 DOM 노드를 화면에 표시한다.
3. **이후 렌더링에서는** 업데이트에 의해 렌더링이 발동된 (**변경된 속성을 계산**) 함수 컴포넌트를 호출한다.&#x20;
4. 중첩된 컴포넌트가 더이상 없고 표시되어야하는 내용을 알때까지 **재귀적으로 실행한다.**

{% hint style="info" %}
Render는 항상 순수한 계산이어야한다.\
\
1\. **동일한 입력에는 동일한 출력을 해야한다.**

* 즉 동일한 입력이 주어지면 항상 동일한 jsx를 반환해야한다.

2\. **이전의 state를 변경해서는 안된다.**

* 렌더링 전에 존재했던 객체나 변수를 변경해서는 안된다.
{% endhint %}

#### React는 렌더링 간에 차이가 있을때만 DOM 노드를 변경한다.

매초 부모로부터 전달된 다른 props로 다시 렌더링하는 컴포넌트가 있다.

여기에서 `<input>`에 텍스트를 입력하여 값을 업데이트 하지만 컴포넌트가 리렌더링될 때 텍스트가 사라지지 않는다.

![](<../../.gitbook/assets/image (6).png>)

React가 `<h1>`의 내용만 변경되어 업데이트하기 때문이다.

`<input>`이 변경내역이 없으므로 값을 수정하지 않는다.

