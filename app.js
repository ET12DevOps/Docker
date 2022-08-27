//importo paquete express
const express = require('express')

//importo paquete dotenv
require('dotenv').config()

//importo paquete path
const path = require('path');

//inicializo aplicacion framework express
const app = express()

//inicializo puerto de aplicacion desde env file
const port = process.env.PORT

//entrypoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`)
})