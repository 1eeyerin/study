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

# state 구조화 원칙

1. 항상 두개 이상의 state 변수를 **동시에 업데이트**하는 경우 변수를 병합하는 것이 좋다.

```jsx
const [position, setPosition] = useState({ x: 0, y: 0 });
```

2. **여러 state 조각**이 생기면, 서로 모순되거나 실수하여 불일치 될 수 있는 state가 생길 수 있다.
3. **불필요한** state를 피하는 것이 좋다.

```jsx
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

const fullName = firstName + ' ' + lastName;

return (
    <div>{fullName}</div>
)
```

&#x20;fullName은 **state**가 아니더라도 **동기화가 된다.** 렌더링 중에 **계산**이 되었기 때문이다.

4. **깊게 중첩된** state를 피하는 것이 좋다.
