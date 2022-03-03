const mongoose = require('mongoose')

const mythoPasMythoSchema = mongoose.Schema({
    question : {type:String, required:true},
    reponse : {type:String,required:true},
    illustration : {type:String,default:null},
    type:{type:String},
})

module.exports=mongoose.model('MythoPasMytho',mythoPasMythoSchema)