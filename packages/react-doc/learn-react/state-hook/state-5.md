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

# state 보존 및 재설정

## UI 트리

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

React는 jsx로부터 트리구조를 사용하여 사용자가 만든 UI를 관리하고 모델링한다.

그 다음 React DOM은 해당 UI 트리와 일치하도록 DOM 엘리먼트를 업데이트한다.

## State는 트리의 한 위치에 묶인다.

state가 컴포넌트 내부에 "존재" 한다고 생각할 수 있다.

하지만 state는 실제로 React 내부에서 유지가 된다.

React는 UI트리에서 해당 컴포넌트가 <mark style="color:blue;">**어디에 위치하고 있는지에 따라**</mark> state를 해당 컴포넌트와 **연결시킨다**.



React는 컴포넌트의 UI 트리가 해당 위치에서 렌더링되는 동안은 state를 유지한다.

컴포넌트가 <mark style="color:blue;">**제거**</mark>되거나 같은 위치에 다른 컴포넌트가 렌더링 되면 (= <mark style="color:blue;">**트리 위치가 변경된다면**</mark>) state를 삭제한다.



## 동일한 위치의 동일한 컴포넌트는 state를 유지시킨다.

{% embed url="https://codesandbox.io/embed/bold-glade-w3yplv?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=editor" %}

isFancy `true` 이던 `false` 이던, 루트에서 반환된 `<div>`의 첫번째 자식에는 항상 Counter가 있기 때문에 **state가 유지된다.**

또한 jsx 마크업이 다르더라도 UI트리 관점에서의 동일한 위치이기 때문에 state는 유지된다.

## 반면, UI 트리가 달라진다면  state를 초기화시킨다.

{% embed url="https://codesandbox.io/embed/serene-water-457j8k?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=editor" %}

isPaused가 `true`이거나 `false`임에 따라 UI 트리는 `div > p`가 될 수도, `div > Counter`가 될수도 있다.



위와 같은 내용 특성이 있기 때문에 컴포넌트 함수 정의를 중첩해서는 안 된다.

{% embed url="https://codesandbox.io/embed/boring-stonebraker-ktcmj3?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=editor" %}

버튼을 클릭할 때마다 state가 사라지는 이유는, Wrapper컴포넌트가 렌더링할때마다 Children 함수는 계속 생성되기 때문이다.

그렇기에, 최상위 수준에 선언하고 **정의를 중첩하지 말자.**



### 동일한 위치에서 state 재설정하기  <a href="#resetting-state-at-the-same-position" id="resetting-state-at-the-same-position"></a>

1. 컴포넌트를 다른 위치에 렌더링하기
2. 각 컴포넌트에 key로 명시적인 아이덴티티 부여하기

{% hint style="info" %}
key는 목록에만 사용되는 것이 아니다. key를 사용해 React가 모든 컴포넌트를 구분할 수 있도록 할 수 있다.



기본적으로 리액트는 부모 내의 **순서**로 구문을 하지만, key를 사용하면 순서가 아닌 **고유한 컴포넌트임을** 리액트가 알 수 있다.

\
<mark style="color:blue;">**키는 전역으로 고유하지는 않다. 키는 부모 내에서의 위치만 지정한다.**</mark>
{% endhint %}

