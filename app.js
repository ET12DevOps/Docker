//importo paquete express
const express = require('express')

//importo paquete dotenv
require('dotenv').config()

//importo paquete morgan
var morgan = require('morgan')

//inicializo aplicacion framework express
const app = express()

//inicializo puerto de aplicacion desde env file
const port = process.env.PORT || 3000

//configuracion de morgan
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send("Bienvenidos al ejemplo")
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`)
})