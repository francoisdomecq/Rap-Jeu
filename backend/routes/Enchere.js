//Regarder CrossFeaturing.js pour comprendre le fonctionnement des routes

const express = require('express')
const router = express.Router()

const EnchereCtrl = require('../controllers/Enchere')

router.get('/', EnchereCtrl.getAllEnchere)
router.post('/', EnchereCtrl.createEnchere)
router.get('/:id', EnchereCtrl.getOneEnchere)
router.put('/:id', EnchereCtrl.modifyEnchere)
router.delete('/:id', EnchereCtrl.deleteEnchere)

module.exports = router
