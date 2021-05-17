---
name : "网路编程 - 7 - 深入浅出 Node.js"
---

# 第 7 章 网路编程

[[TOC]]

## 7.1 构建 TCP 服务

### 7.1.1 TCP

- TCP 全名为传输控制协议，在 OSI 七层模型中属于传输层协议。

- TCP 是面向连接的协议，其显著特征是在传输数据之前需要 3 次握手形成会话。

- 只有会话形成之后，服务器端和客户端之间才能相互发送数据。

- 在创建会话过程中，服务器端和客户端分别提供一个套接字，这两个套接字共同形成一个连接。

- 服务器端与客户端通过套接字实现两者之间的连接操作。

### 7.1.2 创建 TCP 服务端

创建一个 TCP 服务器端来接受网路请求：

```js
const net = require('net')

const server = net.createServer((socket) => {
  // 新的连接
  console.log('server connected.')

  socket.on('data', (data) => {
    console.log('[client data]', data.toString())
    socket.write('hello!')
  })

  // 连接断开
  socket.on('end', () => {
    console.log('server disconnect.')
  })

  socket.write('TCP socket Sample:')
})

server.listen(8080, () => {
  console.log('server bond.')
})

```

通过 `net.createServer(listener)` 即可创建一个 TCP 服务器，
参数 `listener` 是连接事件 `connection` 的监听器，也可采用下面方式进行监听：

```js
const server = net.createServer()

server.on('connection', (socket) => {
  // 新的连接
})

// 监听指定端口
server.listen(8080)
```

除了监听端口之外，也可以对 Domain Socket 进行监听：

```js
server.listen('/tmp/echo.sock')
```

### 7.1.3 创建 TCP 客户端

```js
const net = require('net')

const client = net.connect({ port: 8080 }, () => {
  // 'connect' listener
  console.log('client connected.')
  client.write('world!')
})

client.on('data', (data) => {
  console.log('[server data]', data.toString())
  client.end()
})

client.on('end', () => {
  console.log('client disconnected.')
})
```

对 Domain Socket 进行会话：

```js
const client = net.connect({ path: '/tmp/echo.sock' })
```

### 7.1.4 TCP 服务的事件

- Server 服务器事件
    - listening, connection, close, error
- Socket 连接事件
    - data, end, connect, drain, error, close, timeout

服务器事件：

```js
const server = net.createServer(/* connectionListener */)
server.on('listening', () => {
  // 在调用 `server.listen()` 绑定端口或 Domain Socket 后触发。
})
server.on('connection', (socket) => {
  // 在每个客户端套接字连接到服务器时触发。
})
server.on('close', () => {
  // 当服务器关闭时触发。
  // 在调用 `server.close()` 后，服务器将停止接受新的套接字连接，
  // 但保持现有连接，等待所有连接都断开后，触发该事件。
})
server.on('error', (err) => {
  // 当服务器发生异常时触发该事件。
  // 若未监听 `error` 事件，服务器将抛出异常。
})
server.listen(8080 /* , listeningListener */)
```

连接事件：

- 服务器可以同时与多个客户端保持连接，对于每个连接而言是典型的可读写 Stream 对象。
-  Stream 对象可以用于服务器端和客户端之间的通信。
- 既可以通过 `data` 事件接收另一端发来的数据，
- 也可以通过 `write()` 向另一端发送数据。

```js
const server = net.createServer((socket) => {
  // 服务端 Socket

  socket.on('data', (bufferData) => {
    // 当一端调用 `write()` 发送数据时，另一端会触发 `data` 事件。
    // 事件接收的数据即是 `write()` 发送来的数据。
  })
  socket.on('end', () => {
    // 当连接中任意一端发送 FIN 数据时，将触发该事件。
  })
  socket.on('drain', () => {
    // 当任意一端调用 `write()` 方法时，当前这端会触发该事件。
  })
  socket.on('error', () => {
    // 当发生异常时，触发该事件。
  })
  socket.on('close', () => {
    // 当套接字完全关闭时，触发该事件。
  })
  socket.on('timeout', () => {
    // 当一定时间后连接不在活跃时，触发该事件。
    // 通知用户当前连接已经被闲置了。
  })
})

// 客户端 Socket
const client = net.connect(8080)

client.on('connect', () => {
  // 该事件适用于客户端，当套接字与服务器端连接成功时触发。
})
```

## 7.2 构建 UDP 服务

### 7.2.1 创建 UDP 套接字
### 7.2.2 创建 UDP 服务器端
### 7.2.3 创建 UDP 客户端
### 7.2.4 UDP 套接字事件


## 7.3 构建 HTTP 服务

### 7.3.1 HTTP

### 7.3.2 http 模块
### 7.3.3 HTTP 客户端


## 7.4 构建 WebSocket 服务

### 7.4.1 WebSocket 握手
### 7.4.2 WebSocket 数据传输
### 7.4.3 小结


## 7.5 网路服务与安全

### 7.5.1 TLS/SSL
### 7.5.2 TLS 服务
### 7.5.3 HTTPS 服务


## 7.6 总结

