//Regarder CrossFeaturing.js pour comprendre le fonctionnement des routes

const express = require('express')
const router = express.Router()

const RappeurCtrl = require('../controllers/Rappeur')

router.get('/', RappeurCtrl.getAllRappeur)
router.post('/', RappeurCtrl.createRappeur)
router.get('/:id', RappeurCtrl.getOneRappeur)
router.put('/:id', RappeurCtrl.modifyRappeur)
router.delete('/:id', RappeurCtrl.deleteRappeur)

module.exports = router

