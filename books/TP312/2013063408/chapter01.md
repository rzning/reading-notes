---
title   : "介绍 - 1 - JavaScript 设计模式"
---

第 1 章 介绍
===========

身为一个开发者需要编写易于维护的代码，其中一个重要方面是能够找到代码中重复出现的主题并优化它们。

下面介绍以下设计模式的一些历史：

设计模式源于土木工程师 克里斯托弗·亚历山大 ( [Christopher Alexander] ) 的早期作品。

[Christopher Alexander]: <http://www.greatbuildings.com/architects/Christopher_Alexander.html>

![Christopher Alexander](https://images-na.ssl-images-amazon.com/images/I/61CJEigOe-L._SY200_.jpg)

亚历山大 与 拉萨·石川佳纯 ( Sara Ishikawa ) 和 穆雷·西尔弗斯坦 ( Murray Silverstein )
合作创造了一种建筑模式语言，帮助设计师提高自己的设计能力，以解决任何规模的设计和建筑挑战。

其内容在 1977 年以《建筑模式语言》为题的文章发布，随后又制作成一本完整的精装书出版。

::: tip Books
A Pattern Language : Towns, Buildings, Construction .
Christopher Alexander, Sara Ishikawa, Murray Silverstein.
Oxford University Press (1977). ISBN 0195019199.

> <https://www.amazon.com/exec/obidos/ASIN/0195019199/artificeinc>

《模式语言：城镇、建筑物、建筑》

- 克里斯托弗·亚历山大（[Christopher Alexander]）
- 石川萨拉（Sara Ishikawa）
- 默里·西尔弗斯坦（Murray Silverstein）
- 牛津大学出版社（1977 年）
:::


大约 30 年前，软件工程师们开始将 亚历山大 编写的建筑设计原则纳入首个有关设计模式的文档中，
成为初级开发人员改进编程技巧的指南。

关于软件工程设计模式的最早和最具代表性的作品是 1995 年出版的 《设计模式：可复用面向对象软件的基础》 一书。

其四位作者以 “四人组” 著称，或简称为 GoF 。

::: tip Books
Design Patterns: Elements of Reusable Object-Oriented Software

设计模式：可复用面向对象软件的基础

- Erich Gamma
    - <https://github.com/egamma>
    - 瑞士苏黎士国际面向对象技术软件中心的技术主管
    - Jazz 项目的主要领导人
    - Eclipse 的项目管理委员会成员，被业界称为 Eclipse 之父
    - 1991 年博士毕业后来到美国，同三个小伙伴一起布道设计模式
    - 1998 年与 Kent Beck 一起开发 JUnit，使其成为 Java 社区的单元测试工具
    - 之后又领导 Eclipse Java Development Tools 项目，不愧是 IBM 的一个瑰宝
    - 有 敏捷开发方法创始人 之称
    - 于 2011 年以杰出工程师的身份加入微软 Visual Studio 团队
    - 加入微软后在瑞士苏黎世设立开发实验室独自带领团队（Erich 是瑞士人）
    - 亲自操刀用 JavaScript 开发 Monaco 编辑器
    - 之后使用 TypeScript 重构 Monaco ，把代码量从十万行硬是降到了两万以下
    - Monaco 比 Ace 或 CodeMiror 性能要好得多，不过当时只是内部使用且未开源，
      Monaco 并未声名远播，直到 Erich 将 Monaco 用 Electron 包装，
      瞬间变为 VSCode 其性能比 Atom 也好很多
- Richard Helm
    - 澳大利亚悉尼 IBM 顾问集团公司面向对象技术公司的成员
- Ralph Johnson
    - Urbana-Champaign 伊利诺大学计算机科学系成员
- John Vlissides
    - 位于纽约 Hawthorne 的 IBN 托马斯 J. 沃森 研究中心的研究人员
:::

GoF 发表的著作大大推动了设计模式概念在编程领域的进一步发展。

