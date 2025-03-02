const {Schema,model, SchemaType} = require('mongoose');
const Media = require('./Media');

const MediaSchema= Schema({
    Serial: { type: String, required: true, unique: true },
    Titulo: { type: String, required: true},
    Sinopsis: { type: String, required: true},
    Url: { type: String, required: true, unique: true },
    Imagen: { type: String, required: true},
    Estreno: { type: String, required: true},
    Genero: { type: Schema.Types.ObjectId, ref: 'Genero', required: true},
    Director: { type: Schema.Types.ObjectId, ref: 'Director', required: true},
    Productora: { type: Schema.Types.ObjectId, ref: 'Productora', required: true},
    Tipo: { type: Schema.Types.ObjectId, ref: 'Tipo', required: true},
    createdAt: {type: Date, required: true},
    updatedAt: { type: Date, required: true}

});

module.exports = model('Media', MediaSchema);