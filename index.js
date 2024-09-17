var express = require('express')
var app = express()
app.set('port',4000)
app.use(express.json())

app.use(require('./Rutas/heroes'))

app.listen(app.get('port'))
console.log('Otro texto');