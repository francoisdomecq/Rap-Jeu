const mongoose = require('mongoose')

const enchereSchema = mongoose.Schema({
    theme:{type:String,required:true},
})

module.exports=mongoose.model('Encheres',enchereSchema)