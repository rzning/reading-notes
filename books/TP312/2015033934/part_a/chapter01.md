---
title       : "你不知道的 JavaScript 上卷"
---

第一部分 作用域和闭包 Scope & Closures

第一章 作用域是什么
================

几乎所有语言最基本的功能就是，能够存储变量当中的值，并在之后能够对这个值进行访问和修改。

将变量引入程序，我们会思考一系列的问题，比如这些变量存储在哪里？程序是怎样找到它们的？等。

要解决这些问题，需要有一套设计良好的规则来存储变量，并且将来很方便的获取这些变量。这套规则可称之为 **作用域** 。

## 1.1 编译原理

虽然 JavaScript 不是提前编译的，但它确实是一门编译语言。

在传统语言的处理流程中，一段代码在执行之前将经历以下三个步骤，统称为 **编译** 。

1. **分词 / 词法分析 ( Tokenizing / Lexing )**

    - 分词即将代码令牌化，此过程会将代码字符串分解成有一定意义的代码块，每个代码块成为 词法单元 ( token ) 。
    - token 的识别通常通过 有状态 或 无状态 的方式进行。
    - 若在判断一个 token 调用的是 有状态 的解析规则时，通常称为 词法分析，否则称为 分词。

2. **解析 / 语法分析 ( Parsing )**

    - 此过程会将 词法单元流（数组） 转换为一个由元素逐级嵌套组成的代表了程序语法结构的树。
    - 得到的树通常称为 抽象语法树 ( Abstract Syntax Tree, AST ) 。
    - 代码 `var a = 2;` 可能得到以下 AST ：
        - `VariableDeclaration` -- 顶级节点，包括两个子节点
            - `Identifier` -- 其值为 `a`
            - `AssignmentExpression` -- 包括一个子节点
                - `NumericLiteral` -- 其值为 `2`
    - 伪代码：

    ```js
    var code = 'var a = 2;'
    var tokens = tokenizing(code)
    var ast = parsing(tokens)
    // result ==>
    ast = {
        VariableDeclaration: {
            Identifier: 'a',
            AssignmentExpression: {
                NumericLiteral: '2'
            }
        }
    }
    ```

3. **代码生成**

    - 将 AST 转换为可执行代码的过程被称为 代码生成。
    - 也就是将代码的 AST 转化为一组机器指令，可供硬件或引擎执行。

对于 Javascript 来说，编译通常发生在代码执行前的几微秒，甚至更短的时间内。
在讨论的 作用域 背后， Javascript 引擎用尽了各种办法来保证性能最佳，
比如 JIT 可以延迟编译甚至实施重编译。

## 1.2 理解作用域

## 1.3 作用域嵌套

## 1.4 异常

