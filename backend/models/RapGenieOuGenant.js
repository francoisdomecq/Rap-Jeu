const mongoose = require('mongoose')

const rapGenieOuGenantSchema = mongoose.Schema({
    question : {type:String, required:true},
    reponse : {type:String,required:true},
    illustration : {type:String,default:null},
})

module.exports=mongoose.model('RapGenieOuGenant',rapGenieOuGenantSchema)