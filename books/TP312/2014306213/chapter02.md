---
name: '从 Node 开始 - 2 - Node 与 Express 开发'
---

# 第 2 章 从 Node 开始

[[TOC]]

## 2.1 获取 Node

- <https://nodejs.org/zh-cn/>

## 2.2 使用终端

- Linux / OS X

  - Bash Shell

- Windows

  - Git Bash Shell
  - [Console2](https://sourceforge.net/projects/console/)
  - [ConEmu](https://github.com/Maximus5/ConEmu)
  - PowerShell
  - VirtualBox + Dropbox
  - [PuTTY](https://putty.org/)

- [Codio](https://www.codio.com/)

## 2.3 编辑器

- Linux

  - vi

    - [Unix/Linux - The vi Editor Tutorial - tutorialspoint](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
    - [vi Editor in UNIX - GeeksforGeeks](https://www.geeksforgeeks.org/vi-editor-unix/)
    - [How to get started with the Vi editor - RedHat](https://www.redhat.com/sysadmin/get-started-vi-editor)
    - [Vi Editor with Commands - javaTpoint](https://www.javatpoint.com/vi-editor)
    - [Vim](https://www.vim.org/)

  - [Emacs](https://www.gnu.org/software/emacs/)

- OS X

  - Coda

- Windows

  - [TextPad](https://www.textpad.com/home)
  - Notepad++

- [Sublime Text](https://www.sublimetext.com/)

- [Visual Studio Code](https://code.visualstudio.com/)

## 2.4 npm

- <https://www.npmjs.com/package/npm>

包管理器的两个主要职责是安装开发包和管理依赖项。

## 2.5 用 Node 实现简单 Web 服务器

### 2.5.1 Hello World

@[code js](./codes/2-5-1-hello-world.js)

### 2.5.2 事件驱动编程

Node 的核心理念是 **事件驱动编程** 。

对于程序员，你必须知道有哪些事件，以及如何响应这些事件。

在服务器上响应事件也是基于事件驱动的。

### 2.5.3 路由

扩展一下上面 Hello World 例子，将其改造成包含首页、关于、和未找到页面的极简网站：

@[code js{5-22}](./codes/2-5-3-simple-website.js)

### 2.5.4 静态资源服务

使用 Node 提供静态资源只适用于初期的小型项目，对于较大的复杂项目，应该考虑使用 Nginx 或 CDN 之类的代理服务器来提供静态资源。

使用 Node 服务器访问一个 HTML 文件，需要经过下面步骤：首先打开 HTML 文件，读取里面的内容，然后将这些内容发送给浏览器。

继续改造上面例子，首先在 `/public` 目录下创建 home.html, about.html, 404.html 文件，
并根据请求路径分别加载它们：

@[code js](./codes/2-5-4-static-resource-service.js)

## 2.6 走向 Express

目前，我们只是使用 Node 重复实现了 Apache 或 IIS 可自动完成的工作，但通过这些你也了解到了 Node 是如何工作的，并且拥有哪些控制权。

遵循这个思路，通过一步步完善，我们可以写出越来越复杂的 Node 程序，最后可以得到类似与 Express 的东西。。。

幸运的是，我们没有必要这样做， 因为 Express 已经存在了，我们完全可以拿来直接使用，而没有必要在这些基础设施类的代码上浪费精力。
