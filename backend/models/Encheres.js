const mongoose = require('mongoose')

const enchereSchema = mongoose.Schema({
    theme:{type:String,required:true},
    suggestions:{type:String},
})

module.exports=mongoose.model('Encheres',enchereSchema)