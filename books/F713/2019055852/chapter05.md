---
name: Solidity 智能合约编写 - 5 - 深入以太坊智能合约开发
---

# 第 5 章 Solidity 智能合约编写

[[TOC]]

## 5.1 创建智能合约

## 5.2 可见性控制

Solidity 中函数有两种调用方式：

| 调用类型 | 又称     | 是否产生实际的 EVM 调用 |
| -------- | -------- | ----------------------- |
| 内部调用 | 消息调用 | 否                      |
| 外部调用 | -        | 是                      |

函数和状态变量有 4 种可见性类型：

- `external`

  - 可指定一个函数为外部函数，外部函数可以从其他智能合约和交易中调用，不能从内部调用。

- `public`

  - 公共函数是智能合约接口的一部分，可以在内部或通过消息调用。
  - 公共状态变量，会自动创建一个 Getter 函数。

- `internal`

  - 内部函数和状态变量只能是内部访问，即当前合约和从它派生的合约中访问，不能使用 this 调用。

- `private`

  - 私有函数和状态变量尽可以在当前合约中使用，不能被派生智能合约使用。

默认可见性类型：

- 函数默认为 `public` 类型。
- 状态变量只能被智能合约内部的函数改变，因此不能设置为 `external` ，默认为 `internal` 类型。

可见性标识符位置：

- 状态变量的类型后面。
- 函数的参数列表和返回类型中间。

## 5.3 Getter 函数

Solidity 编译器自动为所有 `public` 状态变量生成对应的 Getter 访问器函数。

Getter 函数的可见性是 `external` 的。

公共状态变量，内部以变量访问，外部以函数访问。

对于数组类型的公共状态变量，只能通过自动生成的 Getter(index) 函数访问数组中的单个元素。

## 5.4 函数修饰器

使用函数修饰器 ( modifier ) 可以轻松改变函数的行为。

修饰器为智能合约可以继承属性，并且可以被派生智能合约覆盖。

```solidity
pragma solidity ^0.4.11;

constant owned {
  address owner;
  function owned() public {
    owner = msg.sender;
  }

  // 定义修饰器
  // 修饰器所修改的函数体会插入到 `_;` 位置
  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }
}

constant mortal is owned {
  // 智能合约从 owned 继承了 onlyOwner 修饰符，并作用于 close 函数
  // 只有在智能合约里保存的 owner 调用 close 函数才生效
  function close() public onlyOwner {
    selfdestruct(owner);
  }
}

contract priced {
  // 修改器可以接收参数
  modifier costs(uint price) {
    if (msg.value >= price) {
      _;
    }
  }
}

contract Register is priced, owned {
  mapping (address => bool) registeredAddresses;
  uint price;

  function Register(uint initialPrice) public {
    price = initialPrice;
  }

  // 不加 payable 关键字，函数会自动拒绝所有发送给它的以太币
  function register() public payable costs(price) {
    registeredAddresses[msg.sender] = true;
  }

  function changePrice(uint _price) public onlyOwner {
    price = _price;
  }
}
```

同一个函数的多个修饰器之间使用空格隔开，修饰器会被依次检查执行。

## 5.5 状态常量

合约一旦部署，状态常量将不再修改。

状态常量可以使用 `constant` 或 `immutable` 声明：

- `constant` 常量的值在编译时确定。
- `immutable` 不可变量的值在部署时确定。

```solidity
constant C {
  string constant TEXT = "abc";
  uint immutable maxBalance;

  constructor(address _reference) {
    maxBalance = _reference.balance;
  }

  function isBalanceTooHigh(address _other) public view returns (bool) {
    return _other.balance > maxBalance;
  }
}
```

## 5.6 函数

在 Solidity 0.4.17 版本之后，函数不再支持使用 `constant` 声明，
取而代之的是 `view` 和 `pure` 关键字。

在改动之前，被 `constant` 标记的函数不能修改合约的状态变量，也就是不能发生写入操作。

### 5.6.1 View 函数

- 使用 `view` 声明的函数只能读取不能修改状态变量。
- 即该函数不能执行 SSTORE 指令，也不能发送或接收以太币。
- 在调用其他函数时，只能调用 `view` 和 `pure` 函数。

::: tip SSTORE
SSTORE 指令为 EVM 汇编代码，表示写入。
:::

### 5.6.2 Pure 函数

### 5.6.3 Fallback 函数

### 5.6.4 函数重载

## 5.7 事件

## 5.8 继承

### 5.8.1 基类构造函数

### 5.8.2 多重继承

### 5.8.3 线性化

## 5.9 抽象智能合约

## 5.10 接口

## 5.11 库

## 5.12 Using for 的用法
