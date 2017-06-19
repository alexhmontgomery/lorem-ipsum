const express = require('express')
const app = express()
const loremIpsum = require('lorem-ipsum')

app.get('/lorem', function (req, res) {
  var output = loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'HTML',
    suffix: '<br>'
  })

  res.send(output)
})

app.get('/lorem/:count', function (req, res) {
  let newCount = parseInt(req.params.count)

  var output = loremIpsum({
    count: newCount,
    units: 'paragraphs',
    format: 'HTML',
    suffix: '<br>'
  })

  res.send(output)
})

app.listen(3000, function () {
  console.log('Check out http://0.0.0.0:3000')
})
