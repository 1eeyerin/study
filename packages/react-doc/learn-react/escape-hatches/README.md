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

# Escape Hatches

## Effect

{% embed url="https://codesandbox.io/embed/immutable-field-fqyjtp?expanddevtools=1&fontsize=14&hidenavigation=1&module=/App.js&theme=light" %}

Connecting이 두번 출력되는 이유는 <mark style="color:blue;">**개발환경**</mark>이기 때문이다.

개발환경에서 리액트는 즉시 실행되고 **Effect를 한번 더 정리한다.**![](<../../.gitbook/assets/image (11).png>)

이렇게 하여 <mark style="color:blue;">**Clean up 함수를 잊지 않고 구현할 수 있도록**</mark>** 돕는다**.



{% embed url="https://codesandbox.io/embed/empty-field-d47xs4?expanddevtools=1&fontsize=14&hidenavigation=1&theme=light" %}

## 이벤트와 Effect 분리하기 <mark style="color:red;">**`experimental`**</mark> <a href="#separating-events-from-effects" id="separating-events-from-effects"></a>

{% embed url="https://codesandbox.io/embed/blue-lake-kwm2nk?fontsize=14&hidenavigation=1&module=/App.js&theme=light" %}

## 커스텀 훅으로 로직 재사용하기 <a href="#separating-events-from-effects" id="separating-events-from-effects"></a>

{% embed url="https://codesandbox.io/embed/practical-clarke-5wvrwx?fontsize=14&hidenavigation=1&module=/App.js&theme=light" %}
