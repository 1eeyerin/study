---
description: 지역변수가 왜 렌더링을 발동시키지 않는지 / hook / useState / state
---

# 상태(state)와 Hook

## 상태 업데이트 하기

### React의 지역변수

1. **지역 변수는 렌더링 간에 유지되지 않는다.** 컴포넌트를 두번째로 렌더링 할 때 지역 변수의 변경사항을 고려하지 않는다.
2. **지역 변수를 변경해도 렌더링을 발동시키지 않는다.**  React는 새로운 데이터로 컴포넌트를 렌더링 시켜야하는 것을 인식하지 못한다.

### 컴포넌트를 새 데이터로 업데이트 하려면..

1. 렌더링 사이에 데이터를 유지할 것
2. 새로운 데이터로 다시 렌더링 하도록 React를 Trigger 할것

### useState는 이 두가지를 제공한다

1. 렌더링 사이에 데이터를 유지할 state 변수
2. 변수를 업데이트하고 다시 렌더링하도록 Trigger하는 **state 설정자 함수**

***

## Hook

React에서 useState를 비롯한 "use"로 시작하는 함수를 hook 이라고 부른다.

hook은 **React가 렌더링 중일 때만 사용할 수 있는 함수다**.

hook은 컴포넌트의 "**최상위 레벨"** 또는 **커스텀 훅**에서만 호출할 수 있다.

조건문, 반복문 또는 **중첩된 함수 내부**에서는 훅을 호출할 수 없다.



## `useState` 해부하기 <a href="#anatomy-of-usestate" id="anatomy-of-usestate"></a>

<pre class="language-jsx"><code class="lang-jsx">const [index, setIndex] = useState(0);

function onClick {
<strong>  setIndex(index + 1);
</strong>}
</code></pre>

1. 컴포넌트가 처음 렌더링 된다. (초기값 0)
2. **클릭시 state를 업데이트한다.**  설정자함수에서 변경된 1을 기억하고, 렌더링을 Trigger  한다.
3. **컴포넌트가 다시 렌더링 된다.**  React는 0을 바라보고 있지만. 1이 된 것을 기억하고 있기 때문에, 1을 보여준다.

## isolated(격리) 되고 private한 state

state는 컴포넌트 인스턴스에 지역적인 특성을 갖고 있다.

state는 컴포넌트 안에서 두개 이상 가질 수 있다. 내부적으로 React는 순서대로 일치시킨다.

그렇기 때문에 컴포넌트를 두군데에서 렌더링하면 두개의 격리된 state를 갖는다.

state는 이를 선언하는 컴포넌트 외에는 완전히 비공개이며, 부모가 이를 변경할 수 없다.





