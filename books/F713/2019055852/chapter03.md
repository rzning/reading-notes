---
name: Solidity 语言基础 - 3 - 深入以太坊智能合约开发
---

# 第 3 章 Solidity 语言基础

[[TOC]]

## 3.1 智能合约与 Solidity 简介

## 3.2 Solidity 基础语法

### 3.2.1 版本杂注

```solidity
pragma solidity ^0.4.0
```

### 3.2.2 import 用法

```solidity
// 从 filename 中导入所有的全局符号到当前全局作用域中。
import "filename";

// 创建 symbolName 全局符号，其成员为 filename 中的所有全局符号。
import * as symbolName from "filename";

// 上面语法简写形式
import "filename" as symbolName;

// 导入部分符号，也可定义别名
import { symboll as alias, symbol2 } from "filename";
```

### 3.2.3 代码注释

```solidity
// 单行注释

/*
  多行注释
 */

/// @dev 单行 natspec 注释

/**
 * @dev 多行 natspec 注释
 */
```

> NatSpec Format — Solidity 0.8.5 documentation
>
> - <https://docs.soliditylang.org/en/develop/natspec-format.html>

### 3.2.4 数据类型

::: details 1. 值类型

:::

::: details 2. 引用类型

由于操作复杂类型的开销比较大，因此不得不考虑它们的存储位置。

需要考虑将它们保存在内存（临时数据）中还是存储（永久存储）中。

#### ⑴ 数据位置

所有的复杂类型（即数组和结构类型）都有一个额外属性，即数据位置，说明数据是保存在内存中还是存储中。

- 根据上下文大多数时候数据有默认的数据位置，
- 不过也可以通过在类型后面添加 `storage` 和 `memory` 关键字进行修改。
- 函数的形参和返回参数的默认数据位置是 `memory` ，
- 局部变量的数据位置默认是 `storage` ，
- 状态变量的数据位置强制为 `storage` 。

#### ⑵ 数组

#### ⑶ 创建内存数组

#### ⑷ 数组字面常数

#### ⑸ 结构体

:::

:::details 3. 映射

:::
