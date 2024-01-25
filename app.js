const express = require('express')
const app = express()

app.get('/', function (req, res) {
  
    res.send('Hello World from Express ')
})

app.all('/Tha ennegram', function (req, res) {
  
  res.send('I am a number 8. The Master, The Challenger, The Defender, whatever you wanna call it. The definition is: Type 8s are natural leaders, thriving in situations where they can take charge. They champion fairness and justice and aren\'t afraid to push boundaries when they believe it\'s necessary. ')
})

app.all('/Tha teams', function (req, res) {
  
  res.send(' 1 good thing about teams is you have a group of people you can bounce ideas off of and help the workload. one bad thing is the coordination or performance that some may have. only somtimes tho. ')
})

app.listen(3000)