const {Schema,model} = require('mongoose');

const GeneroSchema= Schema({
    Nombre: {type: String, required: true},
    Estado: {type: String, required: true, enum:['Activo','Inactivo']},
    Descripcion: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}
});
module.exports = model('Genero', GeneroSchema);