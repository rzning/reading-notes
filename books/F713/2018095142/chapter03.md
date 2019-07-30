---
title   : "以太坊安装与开发环境配置 - 3 - 区块链2.0 : 以太坊应用开发指南"
---

第三章 以太坊安装与开发环境配置
==========================

## 3.1 客户端安装

以太坊常用的两个客户端是 [Geth] 和 [Parity] 。

[Geth]: <https://geth.ethereum.org/>
[Parity]: <https://www.parity.io/>

### 3.1.1 以太坊客户端软件安装

以太坊钱包是一个基于 [Mist] 浏览器的独立分布式应用。

[Mist]: <https://github.com/ethereum/mist>

::: danger 弃用
Mist and Ethereum Wallet have been deprecated.

[Mist] 和以太坊钱包已弃用。
:::

[Geth] 是使用非常广泛、能实现和运行完整以太坊机制的命令行客户端。

Geth 客户端基于 Go 语言开发。点击下面链接可以直接下载 Geth 二进制版本：

- <https://geth.ethereum.org/downloads/>

安装运行 Geth 客户端，可以加入以太坊前沿的测试网络和运营网络，并且具有以下功能：

- 以太币挖矿
- 在不同地址（账户）之间转账
- 创建智能合约并发送交易
- 浏览区块数据
- 其他功能

以太坊对移动端的支持还处于早期阶段。Geth 项目团队已经发布移动端测试版。

以太坊应用项目对移动端的支持，目前的常规方法是建立一个支持 Web 或 APP 接入的中心化平台，
通过中心化平台与以太坊交互来实现对移动端的支持。

### 3.1.2 创建以太坊账户

账户是操作使用以太坊的基础，在安装好 Geth 客户端后，用户可以在命令行状态使用 `geth` 命令创建账户，
也可以在启动 Geth 客户端后通过 Geth 客户端交互命令来创建账户。

#### 命令行创建

在命令行输入以下命令：

```sh
$ geth account new
```

然后根据提示，为新账户设置密码，创建成功后会返回一个账户地址。

输入以下命令，可打印出用户当前使用的密钥文件中的账户列表：

```sh
$ geth account list
```

#### 交互命令创建

在命令行启动 Geth 客户端，或者使用 `geth attach` 连接到一个已经运行的 Geth 客户端。

客户端允许用户通过输入命令的方式与本地节点交互。

在客户端下，输入以下命令可列出当前账户：

```sh
> eth.accounts
```

用户可以通过 Geth 的 JavaScript 交互运行客户端相关函数命令来创建一个新的账户：

```sh
> personal.newAccount()
```

### 3.1.3 发送以太币

转账交易是以太坊最基本和最常用的操作之一，用户可以使用 Geth 控制台通过 `eth.sendTransaction` 函数来转账。

```js
> var sender = eth.accounts[0]
> var receiver = eth.accounts[1]
> var amount = Web3.toWei(0.01, 'ether')
> eth.sendTransaction({ form: sender, to: receiver, value: amount })
```

### 3.1.4 客户端应用开发接口

以太坊客户端提供一系列基于 JSON-RPC 的方法可供应用程序调用。

基于 JSON-RPC 与客户端直接交互，需要处理以下逻辑：

- JSON-RPC 协议实现；
- 二进制格式的编解码，以及与智能合约的交互；
- 256bit 的数字类型；
- 管理命令，如创建/管理地址，标识交易。

这给应用开发人员带来了不小的负担。

现在可以使用一系列的程序库或工具来处理这些逻辑，使应用开发人员专注于应用，
而不必把精力花在如何处理与 EVM 之间的交互上。

软件库 | 语言
-|-
[Web3.js] | JavaScript
[Web3j]   | Java
[Nethereum] | .NET
[Ethereum.rb] | Ruby

[Web3.js]: <https://github.com/ethereum/web3.js>
[Web3j]: <https://github.com/web3j/web3j>
[Nethereum]: <https://github.com/Nethereum/Nethereum>
[Ethereum.rb]: <https://github.com/EthWorks/ethereum.rb>

## 3.2 以太坊网络配置

以太坊网络是由安装的各个客户端基于 P2P 协议构建的自组织网络。

用户只需要与安装在本地的客户端交互即可，而与全网用户交互是由客户端之间基于以太坊网络协议自主实现的。

用户可以通过对以太坊客户端的不同操作与配置，从而进入到不同的以太坊网络，
或者根据不同的区块链应用需求构建新的以太坊网络。

### 3.2.1 以太坊网络基本操作

