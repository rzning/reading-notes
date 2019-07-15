---
title   : "第五章 Quorum - 区块链从概念到实战"
---

第五章 Quorum
============

## 类型：区块链； 状态：已发布

![quorum-logo](https://raw.githubusercontent.com/jpmorganchase/quorum/master/logo.png)

> Quorum 是企业版的以太坊。

- <https://www.goquorum.com/>
- <https://github.com/jpmorganchase/quorum>

Quorum 专注于解决区块链技术在金融行业以及其他领域所面临的挑战。

Quorum 最初是以金融领域的使用需求为起点的，目前已延伸到其他更多行业。

Quorum 适用于任何需要在已知参与者许可的群组中，高速和高吞吐量处理私有事务的应用程序。

Quorum 支持根据业务需求配置交易的隐私层级和网络的透明度。

Quorum 是由摩根大通公司在以太坊的基础上开发的。

Quourm 是私有的、权限可控的、开源的区块链框架。

Quourm 是 [Go-Ethereum] 客户端的简化分支，可以充分利用以太坊社区已经完成的工作。

[Go-Ethereum]: <https://github.com/ethereum/go-ethereum>

- <https://github.com/ethereum/go-ethereum>

## Quorum 特征

- 高性能；
- 使用基于多重投票共识机制代替工作量证明；
- Peer 的权限管理；
- 以合约为基础的隐私保障；
- 燃料的价格被取消，即使在条款被使用的情况下；
- 同时支持公开与私人的交易以及智能合约。

## Quourm 组成部分

- Quorum Node (modified Geth Client)
- Privacy Manager (Constellation/Tessera)
    - Transaction Manager
    - Enclave

![Quorum Architecture](https://raw.githubusercontent.com/jpmorganchase/quorum-docs/master/images/Quorum%20Architecture.JPG)

### Quorum Node

Quorum 节点被有意设计为 geth 的轻量级分支，以便它能继续利用正在不断增长的以太坊社区内进行的 R&D ( research and development 研发 ) 。

为此 Quorum 将根据未来的 geth 版本进行更新。

Quorum Node 包括一下对 geth 的修改：

- 采用新的 ( Raft or Istanbul BFT ) 共识机制；
- P2P 层被修改为仅允许被许可的节点的连接；
- 区块生成逻辑被修改为使用新的 `global public state root` 检查；
- 区块验证逻辑已被修改，以使用 `global public state root` 替换区块头中的 `global state root` ；
- 状态查找树 ( State Patricia trie ) 被分为两个部分：一个公共状态查找树和一个私有状态查找树；
- 区块验证逻辑已被修改为处理私人交易 ( Private Transactions ) ；
- 事务创建已被修改为允许将事务数据替换为加密哈希值 ( encrypted hashes ) 以便在需要时保存私有数据；
- 虽然燃料 ( Gas ) 仍然存在，但燃料价格已被取消。

### Constellation & Tessera

[Constellation] 和 [Tessera] 是使用 Haskell 和 Java 实现的用于以安全的方式提交信息的通用系统。

[Constellation]: <https://github.com/jpmorganchase/constellation>
[Tessera]: <https://github.com/jpmorganchase/tessera>

Constellation 和 Tessera 模块由两个子模块组成：

- Node ( 用于 Quorum 的一个 `PrivateTransactionManager` 的默认实现 )
- Enclave

### Transaction Manager

### Enclave
