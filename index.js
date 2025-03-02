const express = require('express')
const { getConnection } = require('./db/connection_mongoose') //se debe cambiar dependiendo de donde este alojado el archivo OJO!!!!
require('dotenv').config()
const app = express()
const port = process.env.PORT;

getConnection();

// Middleware para procesar JSON (IMPORTANTE)
app.use(express.json());

app.use('/genre', require('./routers/genre'));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
});
