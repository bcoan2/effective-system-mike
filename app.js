const express = require('express')
const app = express()

app.get('/', function (req, res) {
  
    res.send('Hello World from Express this is a test ')
})

app.listen(3000)