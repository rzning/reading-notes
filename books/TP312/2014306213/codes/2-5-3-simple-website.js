const http = require('http')

const server = http.createServer((req, res) => {
  // 获取路径，并规范化 URL : 去除查询字符串、可选的反斜杠，并转为小写
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

  switch (path) {
    case '': {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Homepage')
      break
    }
    case '/about': {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('About')
      break
    }
    default: {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Page Not Found')
      break
    }
  }
})

server.listen(3000, () => {
  console.log('Server started on localhost:3000')
})
