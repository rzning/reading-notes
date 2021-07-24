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
