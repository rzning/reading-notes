# 第 3 章 省时省力的 Express

前一章我们使用 Node 创建了一个简单的 Web 服务器，本章将使用 Express 再次创建该服务器，并以此作为后续内容的基础。

## 3.1 脚手架

最初很多人都是通过 Ruby 接触到脚手架概念的。

所谓脚手架就是创建一个通用的项目骨架，每次开始新项目时只需复制这个骨架（或称为模板）即可。

Express 提供了一个自动生成脚手架的工具，从而可以让你快速开始一个新的 Express 项目。

这里也推荐一个非常出色的 HTML5 网站模板生成工具：

- [HTML5 Boilerplate](https://html5boilerplate.com/)

## 3.2 草地鹨旅行社网站

> 草地鹨 Meadowlark
>
> ![Meadow Pipit](https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257684731/2400)
>
> - [草地鷚 - eBird](https://ebird.org/species/meapip1/)
> - [Meadow Pipit - Anthus pratensis - Birds of the World](https://birdsoftheworld.org/bow/species/meapip1)
> - [Anthus pratensis (草地鹨) - Avibase 世界鸟类数据库](https://avibase.bsc-eoc.org/species.jsp?avibaseid=14873249B607CEB1)

本书以一个可以运行的假想的草地鹨旅行社网站为例，除提供作为功能性网站外，也提供 REST 服务。

::: details REST 架构风格

REST ( Representational State Transfer ) 即表述性状态传递，是一种针对网络应用的设计和开发方式的软件架构风格。

参考：

- [深入浅出 REST 架构风格 - 简书](https://www.jianshu.com/p/2c4f02161638)
- [理解本真的 REST 架构风格 - 51CTO 博客](https://blog.51cto.com/u_11966318/5375047)
- [RESTful 架构详解 - 菜鸟教程](https://www.runoob.com/w3cnote/restful-architecture.html)

:::

## 3.3 初始步骤

通常我们会把 Web 程序文件与项目相关其他文件（比如会议纪要、文档等）分开存放，也就是说把项目目录的子目录作为项目根路径。

对于草地鹨旅行社网站，我将会把项目放在 `~/projects/meadowlark` 目录，而把 `~/projects/meadowlark/site` 子目录作为项目的根路径。

```catalog
├─┬ projects/
  ├─ ...
  └─┬ meadowlark/
    ├─ ...
    └─┬ site/
      ├─ .gitignore
      ├─ meadowlark.js
      ├─ package.json
```

:one: 使用 `npm init` 命令在项目根路径生成项目的 `package.json` 文件，用于管理项目的依赖项和项目的元数据。

- 指定入口文件 : `meadowlark.js`
- 安装依赖 : `npm install --save express`

@[code json{5,10}](./projects/meadowlark/site/package.json)

:two: 添加 `.gitignore` 文件：

@[code ignore](./projects/meadowlark/site/.gitignore)

:three: 创建 `meadowlark.js` 项目入口文件：

@[code js](./projects/meadowlark/site/3_1_meadowlark.js)

现在我们就有了一个非常精简的 Express 服务器。

可以使用 `node meadowlark.js` 命令启动这个服务器，然后访问 http://localhost:3000 。

此时只会返回一个 404 页面，因为你还没给 Express 配置任何路由信息。

:four: 在 404 处理器之前添加首页和关于页面的路由信息。

@[code{5-24} js{3-14}](./projects/meadowlark/site/3_2_meadowlark.js)
