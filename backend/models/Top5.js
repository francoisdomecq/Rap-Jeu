const mongoose = require('mongoose')

const top5Schema = mongoose.Schema({
    theme:{type:String,required:true},
    suggestions:{type:String},
})

module.exports=mongoose.model('Top5',top5Schema)