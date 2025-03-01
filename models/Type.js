const {Schema,model} = require('mongoose');

const TypeSchema = Schema({
    Name:{type:String,required:true},
    Date_of_creation: { type: Date, required: true, default: Date.now },
    Date_of_update: { type: Date, required: true, default: Date.now },
    Description:{type:String},



});
module.exports = model('type', TypeSchema);