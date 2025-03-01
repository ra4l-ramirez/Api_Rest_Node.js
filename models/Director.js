const {Schema,model} = require('mongoose');

const  DirectorSchema= Schema({
    Name:{type:String,required:true},
    State:{type:String,required:true, Enum:['active','inactive']},
   
    Date_of_creation: { type: Date, required: true, default: Date.now },
    Date_of_update: { type: Date, required: true, default: Date.now }

});
module.exports = model('Director', DirectorSchema);

