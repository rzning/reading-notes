---
title   : "设计模式分类 - 8 - JavaScript 设计模式"
---

第 8 章 设计模式分类
==================

设计模式可分为 创建型、结构型、行为型 三大类：

- 创建型模式
    > 基于创建对象的概念
    - *类*
        - 工厂方法
    - *对象*
        - 抽象工厂
        - 生成器
        - 原型
        - 单例

- 结构型模式
    > 基于构建对象块的想法
    - *类*
        - 适配器
    - *对象*
        - 适配器
        - 桥接
        - 组合
        - 装饰
        - 外观
        - 亨元
        - 代理

- 行为模式
    > 基于对象在一起配合工作的方式
    - *类*
        - 解释器
        - 模板方法
    - *对象*
        - 职责链
        - 命令
        - 迭代器
        - 中介者
        - 备忘录
        - 观察者
        - 状态
        - 策略
        - 访问者


### 创建型模式

模式 | 描述
-|-
工厂方法 | 基于接口数据或事件生成几个派生类的一个实例
抽象工厂 | 创建若干类系列的一个实例，无需详述具体的类
生成器 | 从表示中分离对象构建，总是构建相同类型的对象
原型 | 用于复制或克隆完全初始化的实例
单例 | 一个类的全局访问点只有唯一一个实例


### 结构型模式

模式 | 描述
-|-
适配器 | 匹配不同类的接口，类可以在不兼容接口的情况下共同工作
桥接 | 将对象接口从其实现中分离，它们可以独立进行变化
组合 | 简单和符合对象的结构，使对象的总和不只是它各部分的总和
装饰 | 向对象动态添加备选的处理
外观 | 隐藏整个子系统复杂性的唯一一个类
亨元 | 一个用于实现包含在别处信息的高效共享的细粒度实例
代理 | 占位符对象代表真正的对象


### 行为型模式

模式 | 描述
-|-
解释器 | 将语言元素包含在应用程序中的方法，以匹配预期语言的语法
模板方法 | 在方法中创建算法的 shell ，然后将确切的步骤推到子类
责任链 | 在对象链之间传递请求的方法，以找到能够处理请求的对象
命令 | 将命令执行从其调用程序中分离的方法
迭代器 | 顺序访问一个集合中的元素，无需了解该集合的内部工作原理
中介者 | 在类之间定义简化的通信，以防止一组类显式引用彼此
备忘录 | 捕获对象的内部状态，以能够在以后恢复它
观察者 | 向多个类通知改变的方式，以确保类之间的一致性
状态 | 状态改变时更改对象的行为
策略 | 在一个类中封装算法，将选择与实现分离
访问者 | 向类添加一个新的操作，无需改变类


### 关于类 Class 的说明

在上述中有类 Class 的概念。
JavaScript 是一种无类的语言，但可以使用函数来模拟类。

最常用的方法是定义一个函数，然后使用 `new` 关键字创建新的对象，
使用 `this` 来定义对象新的属性和方法。

```js
// 定义一个 Car 类
function Car (model) {
    this.model = model
    this.color = "silver"
    this.year = "2020"
}

Car.prototype.getInfo = function () {
    return this.model + "  " + this.year
}

// 实例化 Car 类对象
var myCar = new Car("Ford")

myCar.year = "2018"

console.log(myCar.getInfo())
```

::: tip 帖子
关于使用 JavaScript 定义类的方法可参考 斯托扬·斯蒂凡诺夫 发布的帖子
- <https://www.phpied.com/3-ways-to-define-a-javascript-class/>
:::

可以使用 ES6 中的关于类的语法糖：

```js
class Car {
    constructor (model) {
        this.model = model
        this.color = 'silver'
        this.year = '2020'
    }

    getInfo () {
        return `${this.model} ${this.year}`
    }
}

const myCar = new Car('Ford')
```
