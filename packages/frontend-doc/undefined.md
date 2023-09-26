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

# 이벤트 루프

{% hint style="info" %}
<mark style="color:blue;">**브라우저 엔진**</mark> :  메모리 힙 / 콜(호출) 스택, 싱글스레드로 동작

<mark style="color:blue;">**웹 API 메서드**</mark> :  멀티스레드로 동작 (DOM 이벤트, AJAX HTTP요청, Timtout)

<mark style="color:blue;">**콜백 큐**</mark> :  웹 API 메서드에서 리턴된 콜백함수를 등록해두고, 콜 스택이 비면 이벤트루프가 콜 스택에 넣어준다.
{% endhint %}

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

## 이벤트 루프

호출 스택과 콜백 큐를 계속 주시하고 있다가, <mark style="color:blue;">**호출 스택이 비어있으면**</mark> 먼저 들어온 순서대로 콜백 큐에 있는 콜백 함수들을 > 호출 스택으로 이동시켜주는 역할을 한다.

## 자바스크립트 엔진

자바스크립트 코드를 해석하고 실행한다.

힙(Heap)과 호출 스택(Call Stack)으로 이루어져 있다.

## 힙(Heap)

메모리 할당을 한다.

## 호출 스택(Call Stack)

함수가 호출되는 순서대로 쌓이는 스택이다.

함수 실행시 호출 스택에 해당 함수를 넣는다.&#x20;

```javascript
function second() {
    setTimeout(function() {
        console.log('1');
    }, 1000);
}

function first() {
    console.log('2');
    second();
    console.log('3');
}

first();
// output: 2, 3, 1
```

* first() 함수가 등록된다. `in`
* 콘솔로그로 2가 출력된다.  > 호출 스택에서 사라진다.
* second() 함수가 등록된다. `in`
* setTimeout 함수가 등록되고 `in` 시간이 도달하면 콜백 큐에 등록된다. `out`
* 모든 일을 다 한 second() 함수가 제거된다. `out`
* 콘솔로그로 3이 출력된다.
* 모든 일을 다 한 first() 함수가 제거된다. `out`
* 카운트 시간이 완료되면, 호출 스택이 비어있을 때 콜백 함수가 실행되어 콘솔로그 1이 출력된다.

## 싱글 스레드

호출 스택을 하나만 사용한다.

동시에 하나의 일만 처리할 수 있다.

## 콜백 함수

다른 함수의 인자로 넘겨지는 함수, 콜백 수신 함수에 의해 특정 시점에 실행된다.

동기 콜백의 경우 호출 즉시 실행하고 비동기 콜백의 경우 조건을 만족했을 때 실행된다.

## 브라우저의 구조

자바스크립트 엔진은 한번에 하나의 일밖에 진행하지 못하는 싱글스레드이지만

실제로 구동되는 환경인 자바스크립트 엔진 바깥에 위치한 웹브라우저는 Web API 메소드들의 도움으로 비동기처리를 진행하여 멀티스레드로 동작한다.

&#x20;Web API의 비동기 처리가 끝나면 콜백에서 함수를 리턴하는데, 이를 콜백 큐(태스크큐)에 넣는다.

그리고 자바스크립트 엔진이 상호 작용을 하기 위해 필요한 장치가 콜백큐와 이벤트 루프이다.

{% hint style="info" %}
콜백 큐는 Web API의 콜백함수들이 대기하는 큐이다.
{% endhint %}

## 비동기와 try-catch

```javascript
$('.btn').click(function() { // (A)
    try {
        $.getJSON('', function() { // (B)
            // error 발생
        });
    } catch(e) {
    }
})
```

위 코드는 error가 발생되어도 catch 되지 않는다.

1. click 이벤트로 인해 Web APIs에서 A가 콜백큐로 이동을 한다.
2. &#x20;콜스택이 비어있기에 이벤트루프의 도움으로 A가 콜스택으로 들어간다.
3. A에서 getJSON이 (B) 실행되면 XMLHttpRequest객체가 콜백함수와 함께 Web API에 생성이 된다.
4. B는 http 요청을 보내는 것으로 할일이 끝났기 때문에 콜스택에서 리턴이 된다.
5. A 함수도 역시 하나 있는 B가 끝났으니 리턴이 된다.
6. 이 상태에서는 콜스택이 비어있고, XMLHttpRequest객체만 남았다.
7. http 요청을 보낸 후, 이 객체는 사라지고 B만 남아 콜백큐에 들어가게 된다.
8. B는 콜스택이 비어있을때 이벤트루프에 의해 콜스택에 등록된다. 이 시점에는 A는 이미 실행하고 리턴된 상황이기 때문에 <mark style="color:blue;">**다른 문맥 속에서 동작**</mark>을 하고 있어 try catch로 잡아내지 못한다.

```javascript
$('.btn').click(function() {
    $.getJSON('', function() {
        try {
        // error 발생
         } catch(e) {
        }
    })
})
```

에러를 잡기 위해선 위와 같은 코드로 안에 감싸주어야 한다.



## setTimeout 0은 바로 실행이 될까?

```javascript
console.log('1');

setTimeout(function(){
    console.log('2');
}, 0);

console.log('3');
```

1. 콘솔로그 1이 콜스택에서 실행되고 리턴된다.
2. setTimeout이 0초를 카운트 하는 객체를 WebAPI에 생성하고 콜백함수도 생성한다.
3. 0초를 카운트 하고 바로 콜백함수는 콜백큐에 들어간다.
4. 이 상황에서 콜스택이 비어있는 상황이 아니다. 콘솔로그 3이 남았기 때문에 이를 먼저 실행하고 리턴한다.
5. 모든 콜스택이 동작하여 비어있는 상태에서 setTimeout의 콜백함수가 콜스택으로 들어와서 마지막으로 실행된다.

## 🔗 참고 <a href="#undefined" id="undefined"></a>

[https://www.youtube.com/watch?v=wcxWlyps4Vg](https://www.youtube.com/watch?v=wcxWlyps4Vg)
