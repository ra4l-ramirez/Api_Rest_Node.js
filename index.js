const express = require('express')
const { getConnection } = require('./db/connection_mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT;

getConnection();

// Middleware para procesar JSON (IMPORTANTE)
app.use(express.json());

app.use('/genero', require('./routers/genero'));
app.use('/director', require('./routers/director'));
app.use('/productora', require('./routers/productora'));
app.use('/tipo', require('./routers/tipo'));
app.use('/media', require('./routers/media'));


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
});
