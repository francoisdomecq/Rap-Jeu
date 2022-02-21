const mongoose = require('mongoose')

const nomEquipeSchema = mongoose.Schema({
    question:{type:String,required:true},
    debutNomE1 : {type:String, required:true},
    debutNomE2 : {type:String, required:true}
})

module.exports=mongoose.model('NomEquipe',nomEquipeSchema)