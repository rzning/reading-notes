---
title   : "第三章 以太坊 - 区块链从概念到实战"
---

第三章 以太坊
===========

## 类型：区块链； 状态：已发布

与其他加密数字货币不同，以太坊不仅是一种货币，也是一个编程平台。

以太坊是由少年天才 Vitalik Buterin 于 2013 年推出的，他是比特币的早期程序员。

以太坊是当下最广泛使用的区块链应用程序开发的开源框架，其中许多应用程序已经在该平台使用。

以太坊使用自己的货币 Ether ( 以太币 ) 进行交易，但如果需要，也可以接受任何其他加密数字货币。

以太坊通过引入智能合约而不仅仅是工作量证明机制来解决比特币最初存在的问题，通过图灵完备性带来了独特的自给自足力量。

图灵完备的语言是一种根据定义可以执行任何计算的语言。

## 图灵机

图灵机是艾伦·图灵在 1936 年发明的一种假想的机器，它虽然简单，但可以模拟无论多复杂的计算机算法。

如果计算机能够在适当的算法和必要的时间和内存的情况下，解决图灵机可以解决的任何问题，那么这个计算机就是图灵完备的。

应用于计算机语言，则意味着它可以充分利用图灵完备计算机的功能。

## EVM

以太坊是一个图灵完备的区块链框架，使用编程语言，人们可以编写合约来解决任何合理的计算问题。

以太坊的核心是以太坊虚拟机 ( EVM ) ，这是一款基于共识的虚拟机，可以解码字节码中编译好的合约并在节点上执行。

EVM 还可以防止在加密数字货币市场经常出现的 DoS ( Denial of Service 拒绝服务 ) 攻击。

## 智能合约

智能合约是区块链框架的重要组成部分，人们可以使用它在网上交易而不需要中间人。

智能合约不受中央机构的控制和人为的干预。

智能合约是一种自我执行的合约，买方和卖方之间的合约条款直接写进代码行。

智能合约允许在完全不同的、匿名的各方之间进行可信的交易和协议，而不需要中央机构、法律体系和外部执行机制。

智能合约使交易可追踪、透明且不可逆转。

以太坊有 3 种语言可用于编写智能合约：

- Solidity
- Serpent
- LLL

## Solidity

Solidity 是以太坊网络中的官方语言，并被大多数人广泛使用。

智能合约可以使用 Remix ( <https://remix.ethereum.org> ) 基于浏览器的集成编译器 IDE 进行验证。

Solidity 配有自己的编译器，可生成可以在以太坊虚拟机上运行的机器级字节码。

## 燃料

燃料是执行交易或智能合约的内部定价，这个费用是支付给矿工的。

矿工会根据支付的燃料数量对交易进行链上的排序。

每笔交易的燃料价格是为了处理以太坊及其 EVM 的图灵完备性质而设置的。

因此，交易或操作越复杂，其所需的燃料就越多。

燃料有多个相关术语：燃料价格、燃料成本、燃料限制和燃料费用。

燃料背后的原则是为以太坊网络的交易或计算成本提供稳定的数值。

术语 | 说明
-|-
燃料成本 | 是一个静态值，用来衡量计算的成本。因为燃料的真正价值永远不会改变，所以计算成本会保持稳定。
燃料价格 | 是指用其他加密数字货币或通证 ( 如以太币 ) 进行标记的燃料成本。燃料价格是一个浮动价值，如果通证或加密数字货币的成本波动，燃料价格就会变化以保持相同的实际价值。燃料价格是由均衡价格决定的，取决于用户愿意花费多少以及节点是否愿意接受。
燃料限制 | 是每个区块可以使用的最大燃料量，是区块的最大计算负荷、交易量或区块大小，矿工可以随着时间推演慢慢地改变该值。
燃料费用 | 是运行特定交易或计划 ( 称为合约 ) 所需支付的燃料费。区块的燃料费可以用来暗示区块的计算负载、交易量或大小。燃料费用支付给矿工或 PoS 被选出来的节点。

## 共识机制

以太坊目前使用与比特币相同的 PoW ( Proof of Work 工作量证明 ) 进行挖矿。

不过，以太坊很快就有计划改用 PoS ( Proof of Stake 权益证明 ) 机制。

当前以太坊 PoW 模式比比特币效率高，通常每隔 12s 就会将一个区块添加到网络中。

## PoS

采用 PoW ( 工作量证明 ) 进行挖矿是一个资源密集型、耗时费力且难以扩展的模型。

很快，另一种称为 PoS ( Proof of Stake 权益证明 ) 的模型进入市场，
只有被指定通过某种权益股票的当事方才能验证交易。

区块链项目如 Pipple、超级账本、R3 Corda 等均使用基于此模型的变体进行挖矿。

## DAO

据维基百科， DAO ( Decentralized Autonomous Organization 去中心化自治组织 ) ，
有时被称为 DAC ( 去中心化自治公司 ) ，是一个通过一种叫作智能合约的计算机程序的规则运行的组织。

DAO 的交易记录和程序规则保留在区块链上。

DAO 不是一个集中式和等级制的系统模型，DAO 遵循一种分布式的模型，人们根据代码中指定的协议与区块链进行交互。

以太坊 DAO 众筹是迄今为止最成功的众筹活动之一。

## 以太坊用例

- 加密数字货币和货币兑换；
- 遗嘱和证书生成；
- 发行身份证、追踪难民卡；
- 选举投票系统；
- 众筹；
- 土地登记和房地产；
- 招标和拍卖应用。

## 以太坊入门

### Truffle

![truffle-logo-dark](https://avatars2.githubusercontent.com/u/22205159?s=160)

> A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. 

Truffle 是一个开发智能合约的工具，用最好的 cacaos 制作而成。

- <https://www.trufflesuite.com/>
- <https://github.com/trufflesuite/truffle>

Truffle 使用以太坊虚拟机 ( EVM ) 的区块链的世界级开发环境，测试框架和资产管道，旨在使开发人员的生活更轻松。

使用步骤：

安装 Truffle 包，需求 Node.js v8.9.4 或更高版本。

```bash
npm install -g truffle
```

安装 testRPC 目前此包已经更名为 ganache-cli

```bash
npm install -g ganache-cli
```

- <https://www.trufflesuite.com/ganache>
- <https://github.com/trufflesuite/ganache>
- <https://github.com/trufflesuite/ganache-cli>

Canache CLI 是以太坊开发工具 Truffle 套件的一部分，是 [Ganache] 的命令行版本，
以使用以太坊开发开发你的个人区块链。

[Ganache]: <https://github.com/trufflesuite/ganache>

Ganache CLI 是一个 Node.js 命令行工具，用于测试和开发的以太坊客户端。

Ganache GLI 使用 [EthereumJS] 来模拟完整的客户端并使开发以太坊应用程序的速度变得更快。

[EthereumJS]: <https://ethereumjs.github.io/>

### MetaMask

![ethereum-metamask-chrome](https://metamask.io/img/ethereum-metamask-chrome.png)

[MetaMask] 是一款 Chrome 浏览器插件，它允许在浏览器中运行以太坊 DApps 而无需运行以太坊的全部节点。

- <https://metamask.io/>
- <https://github.com/MetaMask/metamask-extension>

[MetaMask]: <https://metamask.io/>

你可以在 Chrome, Firefox, Opera 和新的 [Brave](https://brave.com/) 浏览器中安装 [MetaMask] 插件。


## 使用以太坊构建企业级区块链应用

以太坊并不是为了解决诸如隐私、可扩展性、性能、点对点网络等企业框架问题而设计的。

若希望继续使用以太坊，并且想拥有企业级的功能，就必须和 Parity 一起使用。

## Parity

- <https://www.parity.io/>
- <https://github.com/paritytech/>

![logo-parity-ethereum](https://github.com/paritytech/parity-ethereum/raw/master/docs/logo-parity-ethereum.svg?sanitize=true)

[parity ethereum]: <https://github.com/paritytech/parity-ethereum>

[parity ethereum] 快速、轻便、强大的 EVM 和 WASM 客户端。

- <https://github.com/paritytech/parity-ethereum>

[parity ethereum] 专为关键任务使用而设计，提供了快速可靠服务所必须的核心基础设施。

- 高性能、高可靠性、低内存占用、易于使用和生产稳定；
- 挖矿通过权威证明 ( PoA ) 而不是工作量证明 ( PoW ) ，如只有指定的用户才能验证事务处理；
- 支持名称注册系统；
- Web3 Dapp 浏览器；
- 密钥创建和管理；
- 地址和多重签名管理。

许多区块链框架此后不断推出，所有这些企业功能都可能是内置的。
