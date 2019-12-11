---
title   : "你不知道的 Javascript 上卷"
---

> 第一部分 作用域和闭包 Scope & Closures

第二章 词法作用域
===============

作用域主要有两种工作模型：

- 词法作用域
    - 最为普遍，白大多数编程语言所采用。

- 动态作用域
    - 有一些编程语言在使用，比如 Bash 脚本、 Perl 中的一些模式等。

## 2.1 词法阶段

在第一章中介绍过，大部分编程语言编译器的第一个工作阶段是词法化。

词法作用域就是定义在词法阶段的作用域，由你写代码时将变量和块作用域放在哪里决定的。

```js
function foo (a) {              // 1
    var b = a * 2;              // 2

    function bar (c) {
        console.log(a, b, c);   // 3
    }

    bar (b * 3)                 // 2
}

foo(2);                         // 1

// => 2, 4, 12
```

上例代码中有三个逐级嵌套的作用域：

1. 全局作用域，包含一个标识符 foo
2. `foo()` 作用域，包含三个标识符 a, b, bar
3. `bar()` 作用域，包含一个标识符 c

作用域查找会在找到第一个匹配的标识符时停止。

在多层的嵌套作用域中定义同名的变量时，会出现变量的 “遮蔽效应”，
即内部的标识符遮蔽了外部的标识符。

## 2.2 欺骗词法

在 Javascript 中有两种机制来实现在运行时修改词法作用域。

### 2.2.1 eval

JavaScript 中 `eval()` 函数可以接收一个字符串作为参数，变更将其作为代码来执行。

```js
function foo (str, a) {
    eval(str);          // 欺骗词法
    console.log(a, b);
}

var b = 2;

foo('var b = 3;', 1)

// => 1, 3
```

上例代码中，在 `foo()` 词法作用域内创建了一个变量 `b` 并遮蔽了全局作用域中的同名变量。

默认情况下，若 `eval()` 中执行的代码中包含变量声明语句，就会在调用 `eval()` 所处的词法作用域内进行修改。

在严格模式中 `eval()` 在运行时有自己的词法作用域，意味着其中的声明语句无法修改所在的作用域。

```js
function foo (str) {
    'use strict';
    eval(str);
    console.log(a);
}

foo('var a = 2')

// => ReferenceError: a is not defined
```

`new Function()` 函数的最后一个参数可以接受代码字符串，并将其转换为动态生成的函数。

::: tip 参考
[Function - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
:::

