---
title   : "以太坊应用接口 - 4 - 区块链2.0 : 以太坊应用开发指南"
---

第四章 以太坊应用接口
==================

以太坊客户端基于 P2P 协议构建以太坊网络，并使用共识机制、激励机制等共同维护一个区块链数据库（该网络的公共账本）。

用户要与这个网络交互，就需要通过以太坊所提供的各种接口。

以太坊提供多种接口方式适用于不同的应用场景。

- 用户可以直接通过以太坊客户端执行文件（如 `geth.exe`, `parity.exe` 等），添加命令行参数形式执行相应操作。
- 通过执行 `geth console` 或 `geth attach` 命令可进入以太坊 JavaScript 交互客户端状态，使用 JavaScript 对象及方法与以太坊网络交互。
- 开发人员若要在自己的应用系统中实现与以太坊网络的交互，则需要通过以太坊的 RPC 接口，基于 HTTP, JSON-RPC, WS 等方式访问以太坊网络。

## 4.1 命令行接口

目前以太坊应用非常广泛的客户端时 [Geth] 和 [Parity] 接下来将介绍 Geth 和 Parity 客户端的常用命令行操作。

[Geth]: <https://geth.ethereum.org/>
[Parity]: <https://www.parity.io/>

### 4.1.1 Geth 客户端操作

[Geth] 客户端程序具有三大类功能：

1. 提供区块链网络的相关操作程序，如区块链账户操作、区块链数据库操作、配置操作等；
2. 作为以太坊网络的客户端代理，提供接口供用户直接输入命令或通过客户应用程序访问和操作以太坊网络；
3. 作为以太坊网络的服务端，供其他客户基于 P2P 网络访问并执行区块封装、验证等挖矿功能。

在命令行输入 `geth help` 可列出所有可用命令行选项：

```sh
$ geth help
```

::: tip
Geth 命令行选项参考： [Commandline options | Go Ethereum](https://geth.ethereum.org/interface/Command-Line-Options)
:::

### 4.1.2 Parity 客户端操作

[Parity] 客户端功能总体上与 [Geth] 客户端类同，并遵循相同的以太坊协议。

相较于基于 Go 语言开发的 Geth 客户端，基于 Rust 语言开发的 Parity 客户端，具有更快的运行速度，并支持 POS 共识机制。

在命令行输入 `parity --help` 显示 Parity 命令行帮助信息：

```sh
$ parity --help
```

::: tip
Parity 子命令参考： [Parity Ethereum CLI Sub-commands · Parity Tech Documentation](https://wiki.parity.io/CLI-Sub-commands)

Parity 命令行选项： [Configuring Parity Ethereum · Parity Tech Documentation](https://wiki.parity.io/Configuring-Parity-Ethereum#cli-options-for-parity-ethereum-client)
:::

## 4.2 JavaScript 运行环境命令

以太坊 JSRE ( JavaScript 运行环境 ) 可以基于 console ( 交互式 ) 或 script ( 非交互 ) 模式进行操作。

以太坊 JavaScript Console 可使用 Web3 JavaScript Papp API 和 admin API 全部功能。

### 4.2.1 交互式应用： JERE REPL 控制台

以太坊命令执行应用程序 Geth 包含 JavaScript 控制台，可通过 `geth console` 或 `geth attach` 命令启动。

- `geth console` - 启动 Geth 节点并打开命令行控制台。
- `geth atach` - 不启动 Geth 节点，而通过连接一个已经运行的 Geth 实例，同时打开命令行控制台。

```sh
# 启动交互式 JavaScript 环境
$ geth console

# 启动交互式 JavaScript 环境（并连接节点）
$ geth atach
```