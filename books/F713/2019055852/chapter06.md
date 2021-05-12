---
name : Solidity 集成开发工具简介 - 6 - 深入以太坊智能合约开发
---

# Solidity 集成开发工具简介

[[TOC]]

## 6.1 Truffle

### 6.1.1 Truffle 简介

### 6.1.2 Truffle 快速体验

#### 1. Truffle 安装

```sh
npm install -g truffle
```

#### 2. Truffle 项目初始化

初始化新项目：

```sh
# 新建工程目录
mkdir truffle-init-demo
cd truffle-init-demo

# 初始化项目
truffle init
```

使用 Truffle 网站的盒子 ( boxes ) 初始化：

```sh
# 新建工程目录
mkdir truffle-metacoin-demo
cd truffle-metacoin-demo

# 下载 MetaCoin Box
truffle unbox metacoin
```

#### 3. Truffle 项目目录结构

- `truffle-object/`
    - `contracts/` - Solidity 智能合约代码目录
    - `migrations/` - 部署脚本文件目录
    - `test/` - 测试脚本目录
    - `truffle.js` - Truffle 配置文件

### 6.1.3 Truffle 开发步骤

::: details 1. 智能合约开发

在项目 `contracts/` 目录使用 Solidity 语言进行智能合约的开发。

:::

::: details 2. 智能合约测试

在项目 `test/` 目录使用 JavaScript 或 Solidity 编写测试。

运行所有测试：

```sh
truffle test
```

运行单个测试：

```sh
truffle test ./test/test.js
```

:::

::: details 3. 智能合约编译


执行以下命令进行智能合约编译：

```sh
truffle compile
```

- 此命令将 `contracts/` 目录下的所有智能合约编译到 `build/contracts/` 目录。
- 后续编译时默认只会编译上次编译后修改过的智能合约文件，若要重新编译所有文件可加 `--all` 参数。

所有 Truffle 项目默认都有一个 `contracts/Migrations.sol` 智能合约文件，
用于进行智能合约的部署。

:::

::: details 4. 智能合约部署

使用以下命令进行智能合约的部署：

```sh
truffle migrate
```

- 该命令会运行 `migrations/` 目录下的部署脚本。

- 部署命令会从上次部署位置开始执行，若要从头部署可添加 `--reset` 参数。

- 部署脚本以数字为前缀，部署命令会按顺序依次部署。

- 本地测试时，确保有以太坊客户端在运行，如 `truffle develop` 或 `ganache` 等。


#### ⑴ 智能合约部署文件

部署脚本为普通 JavaScript 文件：

```js
// migrations/1_initial_migration.js

const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
```

- 部署脚本使用 `artifacts.require()` 方法引用指定的智能合约，参数为智能合约名。
- 使用 `deployer.deploy()` 方法来执行智能合约的部署任务。

部署方法返回一个 `Promise` ：

```js
const A = artifacts.require('A')
const B = artifacts.require('B')

module.exports = function(deployer) {

  // 先部署 A 再部署 B ，将 A 部署后的地址传给 B
  deployer.deploy(A).then(function() {
    return deployer.deploy(B, A.address)
  })
}
```

#### ⑵ 初始化部署

Truffle 需要创建一个名为 `Migrations` 的合约用于部署。

合约 `Migrations` 合约默认在 `contracts/Migrations.sol` 文件中定义：

```solidity
// contracts/Migrations.sol

// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;

  // 完成部署标识是必须的，返回一个 uint 类型的值
  uint public last_completed_migration;

  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
```


#### ⑶ 部署到以太坊网路

部署脚本可以根据网路执行不同的部署操作：

```js
module.exports = function(deployer, network) {
  // 在部署方法中获取 network 参数
  if (network === 'live') {
    // 当网络为 live 时执行相关部署操作
  } else {
    // 否则执行其他部署操作
  }
}
```

部署脚本还可以获取到以太坊客户端和 web3 provider 提供的账号数据：

```js
module.exports = function(deployer, network, accounts) {
  // 部署中使用账号数据与 `web3.eth.getAccounts()` 的结果一致
}
```

部署脚本的其他用法：

```js
const A = artifacts.require('A')

module.exports = function (deployer) {
  // 部署带构造函数参数的智能合约
  deployer.deploy(A, arg1, arg2)

  // 若智能合约已经部署，则不再重复部署
  deployer.deploy(A, { overwrite: false })

  // 设置部署的最大 Ges 和部署的 Form 地址
  deployer.deploy(A, { ges: 4612388, form: '0x...' })

  // 部署多个智能合约
  deployer.deploy([[A, arg1, arg2], B, [C, arg3]])
}
```

:::

::: details 5. 智能合约调用

Truffle 给我们与智能合约的调用提供了便利。

#### :one: 读写数据

一般来说在以太坊网路中：

- 写数据是一次交易 ( transaction )
- 而读数据是一次调用 ( call )

⑴ 交易

- 交易从本质上改变了网路的状态。
- 交易的最大特点就是向以太坊网路中写入数据。
- 交易需要消耗以太币 ( Ether ) 也就是 `ges` 。
- 交易需要花费时间执行，通过交易执行一个智能合约方法，
    不会立即得到返回值，只会返回一个交易编号。


⑵ 调用

- 调用用来在网路上执行代码，而不会有数据改变。
- 调用是免费的。
- 通过调用执行智能合约方法时，会立即获得返回值。


#### :two: 执行智能合约方法


:::


### 6.1.4 Truffle 高级用法

---

## 6.2 Embark

## 6.3 Remix

## 6.4 本章小结
