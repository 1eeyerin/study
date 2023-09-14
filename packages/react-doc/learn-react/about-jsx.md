---
description: jsx란? / jsx 규칙
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

# jsx에 대해서

## JSX란?

웹이 인터렉티브해지면서 로직이 컨텐츠를 결정하는 경우가 많아졌는데, React에서는 관련이 있는 렌더링 로직과 마크업을 함께 그룹화 할 수 있다.

React 컴포넌트는 React가 브라우저에 마크업을 렌더링 할 수 있는 **js 함수**이다. 그리고 **jsx라는 구문 확장자**를 사용하여 해당되는 마크업을 표현한다.

jsx는 js를 확장한 **문법**으로, html과 **유사한 마크업**을 작성할 수 있도록 해준다.

html과 비슷해보이지만 더 **엄격하며**, 동적으로 정보를 표시해줄 수 있다.

## JSX 규칙

### 1. Root Element는 단일로 이루어져 있어야 한다.

컴포넌트에서 여러 Element를 반환하려면 하나의 부모 태그로 감싸주어야한다.

하나의 부모태그로 감쌀 때 마크업 태그를 쓰고 싶지 않다면, 빈 태그를 의미하는 `<></>` Fragment를  사용한다.

Fragment는 HTML 트리구조에서 흔적을 남기지 않고 감싸주는 역할을 한다.

{% hint style="warning" %}
JSX는 HTML처럼 보이지만 내부적으로는 JS 객체로 변환된다.\
하나의 배열로 감싸지 않은 하나의 함수에서는 두개의 객체를 반환할 수 없다.
{% endhint %}

### 2. 모든 태그를 닫아야한다.

&#x20;jsx에서는 태그를 명시적으로 닫아야한다.

### 3. 대부분이 카멜 케이스로 이루어진다.

jsx는 > js로, jsx의 속성은 > js 객체의 key가 된다.

컴포넌트 안에서 속성을 변수로 읽고싶은 경우가 있는데, <mark style="color:blue;">js에서는 변수명에 제한이 있기 때문에 대시를 포함시키거나 예약어를 사용할 수 없다.</mark>

이러한 이유로 React에서는 HTML과 SVG 속성이 카멜 케이스로 작성된다.

* className
* strokeWidth
* htmlFor

다만 data- 와 aria-태그는 예외이다. (참고: [📎](https://react-ko.dev/learn/writing-markup-with-jsx#historical-reason))



