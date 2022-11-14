/**
 * @see https://nodejs.org/zh-cn/about/
 */

const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello world!')
})

server.listen(3000, () => {
  console.log('Server started on localhost:3000')
})
