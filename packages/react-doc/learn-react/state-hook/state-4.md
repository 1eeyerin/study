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

# 컴포넌트 간의 state 공유

## 제어 및 비제어 컴포넌트

{% hint style="info" %}
컴포넌트를 작성할 때 props를 통해 어떤 정보를 제어해야하는지, 제어하지 않아야하는지 고려하여 작성해본다.
{% endhint %}

### **비제어 컴포넌트**

로컬 state를 가진 컴포넌트

{% hint style="success" %}
구성이 덜 필요하기 때문에 상위 컴포넌트에서 사용하기 쉽다.
{% endhint %}

{% hint style="danger" %}
두 컴포넌트를 조정하는 경우 유연성이 떨어진다.&#x20;
{% endhint %}

### **제어 컴포넌트**

<mark style="color:blue;">props에 의해</mark> 구동되는 컴포넌트

{% hint style="success" %}
최대한의 유연성이 제공된다.
{% endhint %}

{% hint style="danger" %}
부모 컴포넌트가 props를 사용하여 완전히 구성해야한다.
{% endhint %}
