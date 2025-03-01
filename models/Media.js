const {Schema,model, SchemaType} = require('mongoose');
const Type = require('./Type');

const  MediaSchema= Schema({
    Serial:{type:String,unique:true},
    Title:{type:String,unique:true},
    Synopsis:{type:String},
    Url:{Type:String},
    Photo:{Type:String},
    Date_of_creation: { type: Date, required: true, default: Date.now },
    Date_of_update: { type: Date, required: true, default: Date.now },
    Genre:{type:Schema.Types.ObjectId, ref:'Genre',requerid:true},

})
module.exports = model('Media', MediaSchema);