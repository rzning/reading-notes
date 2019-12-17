---
title   : "你不知道的 Javascript 上卷"
---

> 第一部分 作用域和闭包 Scope & Closures

第三章 函数作用域和块级作用域
=========================

## 3.1 函数中的作用域

通常认为 JavaScript 具有基于函数的作用域，每声明一个函数就会为自身创建一个作用域，而其他结构不会创建。

## 3.2 隐藏内部实现

可以使用函数创建一个作用域将一段代码包裹起来，在外边看来其内部声明的变量被隐藏了。这种处理方法满足了最小授权或最小暴露原则。

隐藏作用域中的变量和函数，可以避免同名标识符之间的冲突。命名冲突会导致变量值被意外覆盖。

```js
function foo () {
  function bar (a) {
    i = 3;
    console.log(a + i);
  }

  for (var i = 0; i < 10; i++) {
    bar(i * 2);
  }
}

// => Error: 将造成无限循环
```

上例中 `bar()` 内部的赋值表达式 `i = 3` 以外的覆盖了声明在 `foo()` 内部的 for 循环中的 i 变量，从而导致无限循环。

在 `bar()` 内部的赋值操作，需要声明一个本地变量来使用，例如 `var i = 3` 就可以避免冲突，也可以声明一个不同名称的变量。

## 3.3 函数作用域

再任意代码片段外部添加包装函数，可以将内部的变量和函数定义隐藏起来，外部作用域无法访问包装函数内部的任何内容。

```js
var a = 2;

(function foo () {

  var a = 3;
  console.log(a); // => 3

})();

console.log(a); // => 2
```

上例代码片段中，函数 `foo()` 被包裹在一对 `( )` 括号内部，因此成为一个表达式而不是函数声明。
标识符 `foo` 被绑定在函数表达式自身的函数中而不是所在作用域中，不会污染外部作用域。

上例中的立即执行函数表达式的函数名 `foo` 可以省略，变成一个匿名函数表达式。

::: warning IIFE
Immediately Invoked Function Expression

立即执行函数
:::

匿名函数在实践中有很多弊端，比如在栈追踪中调试困难，引用自身需使用过时的 `arguments.callee` 引用，阅读困难等。

::: tip 总结
始终给函数表达式命名是一个最佳实践。
:::


```js
undefined = true;

(function IIFE (undefined) {
    var a;
    if (a === undefined) {
        console.log('Variable a is undefined');
    }
})();
```

上例中将函数参数命名为 `undefined` 且在调用时不传入任何值，可以避免 `undefined` 标识符的默认值被错误覆盖导致的异常。

在 UMD ( Universal Module Definition ) 项目中广泛使用倒置代码运行顺序的模式。

```js
var a = 2;

(function IIFE (def) {
    def(window);
})(function def (global) {

    var a = 3;
    console.log(a)          // => 3
    console.log(global.a)   // => 2

});
```

## 3.4 块作用域

程序设计中，变量的声明应该距离使用的地方越近越好，并最大限度地本地化。使用块级作用域就很有用。

表面上看 JavaScript 并没有块作用域地相关功能。

### 3.4.1 with

在第二章中说明过，使用 `with` 语法是块作用域的一种形式，使用 `with` 从对象中创建出的作用域仅在 `with` 声明中有效。

### 3.4.2 try/catch

在 ES3 规范中规定的 try/catch 中的 `catch` 分句会创建一个块作用域，其中声明的变量仅在 `catch` 内部有效。

### 3.4.3 let

在 ES6 中引入了新的 `let` 关键字，实现在大部分 `{ }` 代码块中实现块级作用域。

```js
var foo = true;

if (foo) {
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar)
}

console.log(bar); // => ReferenceError
```

如上例中，用 `let` 将变量附加在一个已经存在的块级作用域的行为的隐式的。

可以在需要时显式的使用 `{ }` 括号来为 `let` 创建块作用域。

```js
var foo = true;

if (foo) {
    {
        let bar = foo * 2;
        bar = something(bar);
        console.log(bar)
    }
}

console.log(bar); // => ReferenceError
```

