const {Schema,model} = require('mongoose');

const TipoSchema = Schema({
    Nombre: {type: String, required: true},
    Estado: {type: String, required: true, enum:['Activo','Inactivo']},
    createdAt: {type: Date, required: true},
    updatedAt: { type: Date, required: true}
});
module.exports = model('Tipo', TipoSchema);