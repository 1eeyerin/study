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

# state 관리

## state 보존 및 재설정  <a href="#preserving-and-resetting-state" id="preserving-and-resetting-state"></a>

컴포넌트를 다시 렌더링할 때 React는 트리의 어떤 부분을 유지하고 업데이트할지 결정한다. 동일한 컴포넌트를 렌더링하더라도 해당 컴포넌트에 다른 `key`를 전달하여 **state를 강제로 초기화할 수 있다.**

key가 다르면 다시 렌더링을 한다.

{% embed url="https://codesandbox.io/embed/modest-murdock-9m46rp?fontsize=14&hidenavigation=1&module=/App.js&theme=light&view=preview" %}

## reducer

많은 state 업데이트가 여러 이벤트 핸들러에 분산되어 있는 컴포넌트는 과부하가 걸릴 수 있다.\
이런 경우 모든 state 업데이트 로직을 reducer라는 단일 함수로 통합시킬 수 있다.

이벤트 핸들러는 사용자 "액션"만 지정하기 때문에 간결해지는 장점이 있다.

## context로 데이터 깊숙이 전달하기 <a href="#passing-data-deeply-with-context" id="passing-data-deeply-with-context"></a>

 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때는 props를 통해 전달한다.

하지만 일부 prop을 여러 컴포넌트에 전달해야하는 경우 props 전달이 불편해질 수 있다.

context를 사용하면 부모 컴포넌트가 prop을 통해 전달하지 않고도 아래 모든 컴포넌트에서 정보를 사용할 수 있다.

{% embed url="https://codesandbox.io/embed/boring-maria-mchpv4?fontsize=14&hidenavigation=1&module=/Section.js&theme=light" %}

reducer를 사용하면 컴포넌트의 업데이트 로직을 통합할 수 있고, context를 사용하면 다른 컴포넌트에 정보를 깊숙이 전달할 수 있다.

reducer와 context를 함께 결합하여 복잡한 화면의 state를 관리할 수 있다.
