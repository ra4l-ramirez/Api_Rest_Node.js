// // Importar las dependencias
// const express = require('express');
// const {getConnection}= require('./db/connection_mongoose');


// // Crear una instancia de Express
// const app = express();

// // Configuración del puerto
// const port = process.env.port|| 4000
// getConnection();

// app.use('/api/films', require('./routers/films'));


// // Iniciar el servidor
// app.listen(port, () => {
//   console.log(`Servidor corriendo en el puerto ${port}`)
// });

const express = require('express');
const { getConnection } = require('./db/connection_mongoose');

const app = express();
const port = process.env.PORT || 4000;

getConnection();

// Middleware para procesar JSON (IMPORTANTE)
app.use(express.json());

app.use('/api/genre', require('./routers/genre'));
app.use('/api/genre', require('./routers/genre'));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
