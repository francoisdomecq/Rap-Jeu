const mongoose = require('mongoose')

const rappeurSchema = mongoose.Schema({
    nom : {type:String, required:true}
})

module.exports=mongoose.model('Rappeur',rappeurSchema)