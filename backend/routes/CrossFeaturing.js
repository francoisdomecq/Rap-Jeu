//Routes que l'on utilise pour accéder aux différentes fonctions créées dans le controller associé

const express = require('express')
const router = express.Router()

const CrossFeaturingCtrl = require('../controllers/CrossFeaturing')

//Route GetAll : retourne tous les crossFeaturings
router.get('/', CrossFeaturingCtrl.getAllCrossFeaturing)
//Route Post : ajoute un crossFeaturing dans la base de données
router.post('/', CrossFeaturingCtrl.createCrossFeaturing)
//Route GetOne{idParam} : retourne le crossFeaturing qui a pour id idParam
router.get('/:id', CrossFeaturingCtrl.getOneCrossFeaturing)
//Route Put{idParam} : modifie le crossFeaturing qui a pour id idParam
router.put('/:id', CrossFeaturingCtrl.modifyCrossFeaturing)
//Route Delete{idParam} : supprime le crossFeaturing qui a pour id idParam
router.delete('/:id', CrossFeaturingCtrl.deleteCrossFeaturing)

module.exports = router
