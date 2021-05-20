// server.js

const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('message', (msg, remoteinfo) => {
  const { address, port } = remoteinfo
  console.log(`server got ${msg} from ${address}:${port}`)
})

server.on('listening', () => {
  const address = server.address()
  console.log(`server listening ${address.address}:${address.port}`)
})

// 接收网卡 41234 端口上的所有消息。
// 绑定完成后，触发 listening 事件。
server.bind(41234)
