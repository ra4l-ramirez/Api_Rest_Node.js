const {Schema,model} = require('mongoose');

const ProductoraSchema = Schema({
    Nombre:{type:String, required:true},
    Estado:{type:String, required:true,Enum:['Activo','Inactivo']},
    createdAt: {type: Date, required: true},
    updatedAt: { type: Date, required: true},
    Slogan:{type:String, required: true},
    Descripcion:{type:String, required: true}

});
module.exports = model('Productora', ProductoraSchema);