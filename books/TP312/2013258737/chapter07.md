---
name: '网路编程 - 7 - 深入浅出 Node.js'
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
- Stream 对象可以用于服务器端和客户端之间的通信。
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

- UDP 称为用户数据包协议，与 TCP 同属于网路传输层。
- UDP 跟 TCP 最大的不同是 UDP 不是面向连接的。
- 在 UDP 中，一个套接字可以与多个 UDP 服务通信。
- 由于 UDP 无需连接，资源消耗低，处理快速且灵活，
  因此常应用于偶尔丢一两个包也不会产生重大影响的场景，比如音视频等。
- UDP 应用十分广泛， DNS 服务就是基于 UDP 实现的。

### 7.2.1 创建 UDP 套接字

- UDP 套接字一旦创建，既可以作为客户端发送数据，也可以作为服务器接收数据。

```js
const dgram = require('dgram')

const socket = dgram.createSocket('udp4')
```

### 7.2.2 创建 UDP 服务器端

- 若想让 UDP 套接字接收网路消息，只需调用
  `dgram.bind(port, [address])` 方法对网卡和端口进行绑定即可。

UDP 服务器端示例：

@[code js](./codes/7-2-udp-server.js)

启动服务：

```sh {1}
$ node ./server.js
server listening 0.0.0.0:41234
```

### 7.2.3 创建 UDP 客户端

创建客户端并与服务端进行会话：

@[code js](./codes/7-2-udp-client.js)

执行客户端，服务端有以下输出：

```sh {3}
$ node ./server.js
server listening 0.0.0.0:41234
server got Hello! from 127.0.0.1:50068
```

与 TCP 的 `socket.write()` 方法相比，
UDP 的 `socket.send()` 方法可以随意发送数据到网路中的服务器端，
而 TCP 若要发送数据给另一个服务器端，则需要重新通过套接字构造新的连接。

### 7.2.4 UDP 套接字事件

UDP 套接字只是一个 `EventEmitter` 实例，而非 `Stream` 实例，它具有以下自定义事件：

| Event       | 说明                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `message`   | 当 UDP 套接字监听网卡端口后，接收到消息时触发该事件。事件携带一个消息 `Buffer` 对象和一个 `RemoteInfo` 远程地址信息。 |
| `listening` | 当 UDP 套接字开始监听时触发该事件。                                                                                   |
| `close`     | 调用 `close()` 方法时触发该事件，并不再触发 `message` 事件。                                                          |
| `error`     | 当异常发生时触发该事件。若不监听，异常将直接抛出，使进程退出。                                                        |

## 7.3 构建 HTTP 服务

Node 官网 Http 服务器示例：

> <https://nodejs.org/zh-cn/about/>

@[code js](./codes/7-3-http-server.js)

### 7.3.1 HTTP

#### 1. 初识 HTTP

- HTTP 的全称为 HyperText Transfer Protocal 即超文本传输协议。
- HTTP 构建在 TCP 之上，属于应用层协议。
- HTTP 的两端为服务器和浏览器，即 B/S 模式。
- HTTP 的 W3C 标准为 RFC 2616 。

#### 2. HTTP 报文

启动上述服务器端代码，使用 `curl` 命令的 `-v` 选项获取并打印完整报文信息：

```sh {1}
$ curl -v http://127.0.0.1:3000/
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: 127.0.0.1:3000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/plain
< Date: Fri, 21 May 2021 14:57:54 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 11
<
Hello World* Connection #0 to host 127.0.0.1 left intact
```

- 第一部分（以 `*` 开头）内容为经典的 TCP 3 次握手过程。
- 第二部分（以 `>` 开头）是在完成连接之后，客户端向服务器端发送的请求报文。
- 第三部分（以 `<` 开头）是服务器端完成处理之后，向客户端发送的响应内容。
- 最后部分是结束会话的信息。

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
