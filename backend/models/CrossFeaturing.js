const mongoose = require('mongoose')

const crossFeaturingSchema = mongoose.Schema({
    rappeur1 : {type:String, required:true},
    rappeur2 : {type:String, required:true}
})

module.exports=mongoose.model('CrossFeaturing',crossFeaturingSchema)