const {Schema,model} = require('mongoose');

const DirectorSchema= Schema({
    Nombre: {type:String, required: true},
    Estado: {type:String, required: true, Enum:['Activo','Inactivo']},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}

});
module.exports = model('Director', DirectorSchema);

