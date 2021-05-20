// client.js

const dgram = require('dgram')

const message = Buffer.from('Hello!')

const client = dgram.createSocket('udp4')

// send(buf, offset, length, port, address, callback)
// send 方法参数：Buffer，偏移量，长度，目标端口，目标地址，发送完成后的回调
client.send(message, 0, message.length, 41234, 'localhost', (error, bytes) => {
  client.close()
})
