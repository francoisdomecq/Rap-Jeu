//Regarder CrossFeaturing.js pour comprendre le fonctionnement des routes

const express = require('express')
const router = express.Router()

const RapGenieOuGenantCtrl = require('../controllers/RapGenieOuGenant')

router.get('/', RapGenieOuGenantCtrl.getAllRapGenieOuGenant)
router.post('/', RapGenieOuGenantCtrl.createRapGenieOuGenant)
router.get('/:id', RapGenieOuGenantCtrl.getOneRapGenieOuGenant)
router.put('/:id', RapGenieOuGenantCtrl.modifyRapGenieOuGenant)
router.delete('/:id', RapGenieOuGenantCtrl.deleteRapGenieOuGenant)

module.exports = router

