const net = require('net')

const server2 = net.createServer((socket) => {
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

server2.listen(8080, () => {
  console.log('sever bond.')
})

const server3 = net.createServer(/* connectionListener */)
server3.on('listening', () => {
  // 在调用 `server.listen()` 绑定端口或 Domain Socket 后触发。
})
server3.on('connection', (socket) => {
  // 在每个客户端套接字连接到服务器时触发。
  socket.on('')
})
server3.on('close', () => {
  // 当服务器关闭时触发。
  // 在调用 `server.close()` 后，服务器将停止接受新的套接字连接，
  // 但保持现有连接，等待所有连接都断开后，触发该事件。
})
server3.on('error', (err) => {
  // 当服务器发生异常时触发该事件。
  // 若未监听 `error` 事件，服务器将抛出异常。
})
server3.listen(8080 /* , listeningListener */)
