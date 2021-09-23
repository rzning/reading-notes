---
name: '初识 Express - 1 - Node 与 Express 开发'
---

# 第 1 章 初识 Express

[[TOC]]

## 1.1 JavaScript 革命

最初 JavaScript 只是一个粗陋的客户端脚本语言，现在 JavaScript 不仅是客户端通用的脚本语言，
并且在 Node 的加持下一举成为热门的服务器端脚本语言。

现在的 JavaScript 技术栈十分明朗，从客户端到服务器端开发不需要环境切换，可谓是轻车熟路。
但这并不意味着服务器端编程只和语言有关，其中还有很多其他知识需要学习。

由于历史原因，人们一直对 JavaScript 脚本持有只是一个玩具的偏见，
而现在的 JavaScript 可谓是强大、灵活和优雅。

2009 年 Ryan Dahl 看到了 JavaScript 作为服务器端语言的潜力，于是 Node 诞生了。

这是一个互联网技术生机勃勃的时代。

- Ruby 吸收了学院派计算机科学的一些伟大的思想，并结合了自有的一些新思想，
  推出了一种更快捷的网站及 Web 应用程序构建方式。
- 微软也通过奋勇作战在互联网时代争取了一席之地，借助 .NET 取得了惊人的成就，
  它不仅借鉴了 Ruby 和 JavaScript 的优点，还从 Java 犯的错误中吸取了经验，
  并充分吸收了学术殿堂中的精髓。

徜徉在互联网技术中令人感到兴奋，到处都是令人惊奇的新想法。

## 1.2 初识 Express

> Express 是一种保持最低程度规模、高度包容、快速而极简的 Node.js Web 框架，
> 为 Web 和移动应用程序提供一组强大的功能。
>
> - <http://expressjs.com/zh-cn/>

- 精简
  - Express 最吸引人的特性之一。 Express 的哲学是在你的想法和服务器之间充当薄薄的一层，
    在提供有用特性的同时，尽量不干预开发者实现自己的想法。
- 灵活
  - Express 哲学中的另一个关键点就是可扩展。
  - Express 提供了一个非常精简的框架，应用开发者可以根据自己的需要添加 Express
    功能中的不同部分，随时替换掉不满足需要的部分。
- Web 程序框架
  - 网站和网页都是 Web 程序。
- 单页 Web 程序
  - 单页 Web 程序是将整个网站（或其中很大部分）下载的客户端浏览器上。
  - 经过初次加载后，页面几乎不需要或只是进行很少的服务端通信，
    使用户以更快的速度访问不同的页面内容。
- 多页和混合的 Web 程序
  - 多页 Web 程序是比较传统的方式。网站上的每个页面都是通过向服务器发起单独的请求得到的。

## 1.3 Express 简史

Express 的缔造者 TJ Holowaychuk 说 Express 是在 Sinatra 的启发下创建的，后者是一个基于 Ruby 的框架。

除了 Sinatra ， Express 跟 Connect 也有非常紧密的联系， Connect 是一个 Node 插件库。

- Connect 创造了 中间件 ( Middleware ) 这个术语来描述插入式的 Node 模块，它能在不同程度上处理 Web 请求。
- 在版本 4.0 之前， Express 一直是绑定 Connect 的。
- 在版本 4.0 中， Connect （以及除 static 之外的所有中间件）被去掉了，以便这些中间件可以各自独立升级。

## 1.4 升级到 Express 4.0

## 1.5 Node : 一种新型 Web 服务器

## 1.6 Node 的生态系统

## 1.7 授权