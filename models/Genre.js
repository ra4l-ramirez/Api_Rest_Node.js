const {Schema,model} = require('mongoose');

const  GenreSchema= Schema({
    Name:{type:String,required:true},
    State:{type:String,required:true, enum:['active','inactive']},
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    Date_of_creation: { type: Date, required: true, default: Date.now },
    Date_of_update: { type: Date, required: true, default: Date.now }
});
module.exports = model('Genre', GenreSchema);