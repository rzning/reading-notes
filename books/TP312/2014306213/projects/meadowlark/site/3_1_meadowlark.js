const express = require('express')

const app = express()

app.set('port', process.env.PORT || 3000)

// 定制 404 页面
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found.')
})

// 定制 500 页面
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port'))
})
