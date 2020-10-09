---
title   : "构造器模式 - 9.1 - JavaScript 设计模式"
---

Constructor Pattern
===================

在经典 OOP 语言中，
Constructor 是一种在内存已分配给该对象的情况下，用于初始化新创建对象的特殊方法。

::: tip OOP
Object Oriented Programming

面向对象程序设计
:::

JavaScript 是基于对象的脚本语言，平常操作的所有目标几乎都是对象，
通常我们最感兴趣的是其中的 `Object` 构造器。

> Object 构造器用于创建特定类型的对象

## 1. 创建对象

JavaScript 中创建对象的两种常用方法：

```js
// 使用对象字面量
var newObject = {}

// Object 构造器的简洁记法
var newObject = new Object()
```

Object 构造器为特定的值创建对象封装。当没有传值时，将创建一个空对象并返回。

有四种方法，可以将值赋给一个对象的成员：

```js
// ECMAScript 3 兼容方式

// 1. 点语法
obj.name = "hello"
var val = obj.name

// 2. 中括号语法
obj['name'] = 'hello'
var val = obj['name']

// 适用于 ECMAScript 5 的方式

//3. Object.defineProperty
Object.defineProperty(obj, 'name', {
  value: "hello",
  writable: true,
  enumerable: true,
  configurable: true
})

// 可对上面方法进行简单封装
function defineProp (obj, key, value) {
  const config = {
    writable: true,
    enumerable: true,
    configurable: true
  }
  config.value = value
  Object.defineProperty(obj, key, config)
}

var person = Object.create(null)

defineProp(person, 'car', 'Tesla')
defineProp(person, 'dateOfBirth', '1991')
defineProp(person, 'hometown', 'luoyang')

// 4. Object.defineProperties
Object.defineProperties(obj, {
  'name': {
    value: 'hello',
    writable: true
  },
  'key': {
    value: 'foo',
    writable: false
  }
})
```

上面提到的方法也可用于继承：

```js
// 创建医生对象，继承于上面的 person 对象
var doctor = Object.create(person)

// 为 doctor 添加新的属性
defineProp(doctor, 'category', 'specialist')

// 获取继承的属性
console.log(doctor.car)
// 获取新属性
console.log(doctor.category)
```

## 2. 基本 Constructor


## 3. 带原型的 Constructor


