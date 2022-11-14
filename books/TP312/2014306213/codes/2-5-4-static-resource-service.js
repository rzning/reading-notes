const http = require('http')
const fs = require('fs')

/**
 * 静态文件服务
 * @param {http.ServerResponse} res
 * @param {string} path
 * @param {string} contentType
 * @param {number} responseCode
 */
function serveStaticFile(res, path, contentType, responseCode = 200) {
  // 异步读取文件
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('500 - Internal Error')
    } else {
      res.writeHead(responseCode, { 'Content-Type': contentType })
      res.end(data)
    }
  })
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

  switch (path) {
    case '': {
      serveStaticFile(res, '/public/home.html', 'text/html')
      break
    }
    case '/about': {
      serveStaticFile(res, '/public/about.html', 'text/html')
      break
    }
    case '/favicons/nodejs.png': {
      serveStaticFile(res, '/images/nodejs-favicon.png', 'image/png')
      break
    }
    default: {
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
      break
    }
  }
})

server.listen(3000, () => {
  console.log('Server started on localhost:3000')
})
