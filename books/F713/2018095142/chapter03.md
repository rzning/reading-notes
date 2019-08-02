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

#### 1. 以太坊网络信息检测

可通过访问一些以太坊网络实时信息统计网站查看以太坊公共运营网络当前的状态数据。

网站通常会显示：当前区块、散列计算难度、燃料价格、所消耗的燃料数量等信息。

网站中显示的节点仅是以太坊公共网络中实际节点的一部分，
任何人均可以将他们运行的节点加入以太坊公共信息统计看板。

#### 2. 以太坊客户端之间的连接

以太坊网络通过客户端之间的 P2P 对等网络通信连接保证数据的同步和客户端之间的信息交互。

Geth 客户端启动后将一直尝试连接网络中其他节点，直到它拥有一定数量的对等 ( peer ) 通信节点为止。

#### 3. 检查连接性和客户端节点的 ID

```sh
# 当前节点是否处于监听状态
> net.listening

# 当前客户端已连接到的 peer 节点数量
> net.peerCount

# 已连接的 peer 节点信息列表
> admin.peers

# 当前 Geth 节点信息（占用端口号、URL 等）
> admin.nodeInfo
```

#### 4. 快速下载区块链数据

区块链数据是以太坊客户端工作的基础，用户在进行以太坊相关操作，
如查询以太坊账户信息、发送交易及挖矿等操作前，
需要完成本地客户端区块链数据的同步。

启动以太坊客户端后，将自动下载区块链数据。

在初次使用 Geth 客户端时，可以添加 `--fast` 标识，可以让以太坊客户端不用下载交易数据，
而仅同步区块头的状态数据而快速同步

选项 | 作用
-|-
`--fast` | 用于快速同步区块链数据。 `--fast` 标识仅能在用户第一次同步区块链时使用，在执行过同步操作后将不能使用。即在使用 `--fast` 标识符时，区块链数据存储目录 ( chaindata ) 下不能存在任何数据。
`--cache=1024` | 配置分配给内部缓存的大小，默认为 16MB 。用户可根据自身设备的内存大小进行配置。

#### 5. JIT VM 使能标识 `--jitvm`

```sh
$ geth --fast --cache=1024 --jitvm console
```

#### 6. 导入导出区块链数据

```sh
# 从指定文件导入区块链数据
$ geth import

# 将区块链数据导出到文件
$ geth export

```

#### 7. 静态节点、信任节点和启动节点

若希望每次启动客户端时去连接固定的 peer 节点，可以将其设为静态节点。

静态节点数据可存入 `<datadir>/static-nodes.json` 文件。

可以使用下列函数添加静态节点：

```js
> admin.addPeer('enode://...@<IP>:<PORT>')
```

#### 8. 连接失败原因

不能连接到以太坊网络的常见原因有：

- 本地时间可能不同步。将 Internet 同步时钟设为 time.nist.gov
- 有些防火墙配置为禁止 UDP 传包。可以使用静态节点功能。
- 在其他 Geth 时使用了禁止节点发现协议，即使用了 `-nodiscover` 参数。这种情况主要用于节点测试或基于固定节点的测试网络。

### 3.2.2 使用以太坊测试网络

以太坊测试网络 Testnet 是供以太坊研究开发人员测试使用的公有链，现阶段提供包括 Ropsten, Kovan, Rinkeby 等。
使用相应测试网络，要注意该网络对客户端的要求。

一般在向主网络 Mainnet 正式部署智能合约前，建议在以太坊测试网络或用户自建的私有网络上试运行无误后，再正式部署到以太坊主网络运行。

[Parity] 客户端除了可以接入 Ropsten 外，还可以接入 Kovan 测试网络。

Kovan 测试网络采用 POS 共识机制，目前仅 Parity 客户端支持该共识机制。

用户可以使用下列命令进入以太坊测试网络：

```sh
# Geth 连接到 Ropsten network
$ geth --testnet console

# Geth 连接到 Rinkeby network
$ geth --rinkeby console

# Parity 连接到 Ropsten testnet
$ parity --chain=ropsten

# Parity 连接到 Kovan testnet
$ parity --chain=kovan
```

> Geth 命令行选项参考 : [Commandline options | Go Ethereum](https://geth.ethereum.org/interface/Command-Line-Options)

> Parity 联网参考 : [Basic Usage · Parity Tech Documentation](https://wiki.parity.io/Basic-Usage#networking)

使用以太坊测试网络需要有以太币，有两种方式可以获得 Testnet 的以太币：

- 使用计算机的 CPU/GPU 参与测试网络挖矿；
- 使用各测试网络的以太币水龙头 ( Ethereum wei faucet ) 。

### 3.2.3 搭建私有网络

在私有测试网络上，无需提前获得以太币。基于私有网络是测试以太坊智能合约及其他应用最经济的方法之一，
采用该方法可以避免必须去挖矿或者去寻找 Testnet 网络以太币。

在私有链上需要配置如下数据：

- 自定义起源文件
- 自定义数据存储目录
- 自定义网络标识
- （建议）禁用网络发现协议

1. 区块链起源文件

    起源区块是区块链的开端（第一个块），块号为 0，这是一个没有前向指向块的区块。

    除非其他节点取得同样的创世区块，否则以太坊协议确保没有任何节点能与用户的区块达成共识，
    这样用户就能够创建用户所期望的各类私有测试区块链。

    创建创世区块的 JSON 文件 `Genesis.json` 然后用下列命令引用该文件：

    ```sh
    $ geth init /path/to/Genesis.json
    ```

    Geth 客户端默认使用与 Mainnet 文件相同的目录，需要设置 datadir 参数，以避免覆盖公有网络区块数据。

    对私有链而言，指定 datadir 非常重要，因为任何以太坊网络均是运行在一个区块链数据库（公共账本）上的，
    不同的区块链数据库就决定了不同的以太坊网络。启动 Geth 客户端时，指定 datadir 实质就是指定以太坊网络。

2. 私有网络命令行参数

    必须设置一些命令行参数以确保所创建网络的私有性。

    `--nodiscover`

    禁用对等点发现机制，需手动添加对等点。

    `--maxpeers 0`

    网络对等点的最大数量，如果设置为0，则禁用网络。默认值为 25 。

    `--rpc`

    启用 HTTP-RPC 服务

    `--rpcapi db|eth|net|web3`

    指定访问 HTTP-RPC 接口的 API 类型。此参数决定了那种类型的 API 可基于 HTTP-RPC 进行接入。
    Geth 默认使用 Web3 API 。

    `--rpcport 8545`

    指定 HTTP-RPC 服务器监听端口，默认为 8545 。

