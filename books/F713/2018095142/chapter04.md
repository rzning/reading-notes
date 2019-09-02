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

::: tip
JavaScript Console 文档参考： [JavaScript console | Go Ethereum](https://geth.ethereum.org/interface/JavaScript-Console)
:::

### 4.2.1 交互式应用 : JERE REPL 控制台

以太坊命令执行应用程序 Geth 包含 JavaScript 控制台，可通过 `geth console` 或 `geth attach` 命令启动。

- `geth console` - 启动 Geth 节点并打开命令行控制台。
- `geth atach` - 不启动 Geth 节点，而通过连接一个已经运行的 Geth 实例，同时打开命令行控制台。

```sh
# 启动交互式 JavaScript 环境
$ geth console

# 启动交互式 JavaScript 环境（并连接节点）
$ geth atach
```

### 4.2.2 非交互状态下使用 : JSRE 脚本模式

用户可以直接执行 JavaScript 文件，此 `console` 和 `attach` 子命令接受 `---exec` 参数，用于执行一个 JavaScript 语句。

```sh
$ geth --exec "eth.blockNumber" attach
```

上列命令将打印正在运行的 Geth 实例的当前区块号。

::: warning 警告 ( Caveat )
Geth JSRE 使用 [Otto JS VM] 有以下限制：
- `use strict` 将被解析，但不产生任何作用。
- 正则表达式引擎 ( re2/regexp ) 与 ECMA5 规范不完全兼容。
:::

[Otto JS VM]: <https://github.com/robertkrimen/otto>

### 4.2.3 管理 APIs

除官方的 [Dapp API] 接口， Geth 节点还支持附加的管理 API's 。
这些 API's 使用 [JSON-RPC] 接口，并遵循 Dapp API 相同约定 ( conventions ) 。

Geth 控制台客户端支持所有这些附加的管理 API's 。

[Dapp API]: <https://github.com/ethereum/wiki/JSON-RPC>
[JSON-RPC]: <http://www.jsonrpc.org/specification>

::: tip
管理 APIs 参考： [Management APIs | Go Ethereum](https://geth.ethereum.org/interface/Management-APIs)
:::

## 4.3 Web3 JavaScript 应用程序 API 接口

应用程序需要基于以太坊工作，可以使用由 [Web3.js] 类库提供的 Web3 对象。

基于该引擎，应用程序可以通过 RPC 调用与本地节点进行通信，
[Web3.js] 可以与任何开放 RPC 层的以太坊节点协同工作。

[Web3.js]: <https://github.com/ethereum/web3.js>

Web3 包含 `eth` 对象和 `shh` 对象。

- `Web3.eth` 专用于以太坊网络接口
- `Web3.shh` 用于 whisper 交互

### 加载 Web3

使用以下方法，可以将 Web3.js 加载到用户项目中：

```sh
# npm
$ npm install Web3

# bower
$ bower install Web3

# meteor
$ meteor add ethereum:Web3

# vanilla
$ link the dist ./Web3.min.js
```

然后可以创建 Web3 实例，并设置接口服务 URL 。

```js
import Web3 from 'web3';

const web3 = new Web3('ws://localhost:8546');

console.log(web3);
```

可以使用 `web3.setProvider()` 设置提供程序，如 WebsocketProvider 。

```js
web3.setProvider('ws://localhost:8546');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
```

设置好后方可使用 web3 的 API 了。

```js
web3.eth.getAccounts().then(console.log)
```

### 4.3.2 使用回调

由于 Web3 API 被设计用于与本地 RPC 节点协同工作，其所有功能均默认使用 HTTP 同步请求。

若想使用异步请求，可以在绝大部分函数之后加入可选的回调函数作为最后参数。

所以回调函数均使用错误码回调形式：

```js
web3.eth.getBlock(42, function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
})
```

### 4.3.3 批处理请求

批处理请求允许成批加载请求并同时处理所加载请求。

### 4.3.4 Web3.js 中的超大数字

在以太坊只能合约的开发中，用户经常会获得一个超大数字对象，
由于 JavaScript 不能正确处理超大数字，需要依赖特别的函数进行数字处理。

Web3.js 依赖 BigNumber 库，并自动加载。

```js
var balance = new BigNumber('<a big number string>');
// or
var balance = Web3.eth.getBalance(someAddress);
```

## 4.4 JSON RPC API

JSON-RPC 是无状态、轻量化远程程序接口 ( RPC ) 协议。

此协议主要定义了几类数据结构及相关的数据处理规则。

作为透明传输协议，此概念也可用于基于 sockets, HTTP 或者其他很多不同的消息传输环境中。

JSON-RPC 使用 JSON ( RFC4627 ) 作为数据格式，
基于 JSON-RPC 可以在 Java, C++ 等应用程序中直接调用以太坊客户端的相关方法。

### 4.4.1 默认 JSON-RPC 客户端
