const mongoose = require('mongoose')

const crossFeaturingSchema = mongoose.Schema({
    rappeur_1 : {type:String, required:true},
    rappeur_2 : {type:String, required:true}
})

module.exports=mongoose.model('CrossFeaturing',crossFeaturingSchema)