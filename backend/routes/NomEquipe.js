const express = require('express')
const router = express.Router()

const NomEquipeCtrl = require('../controllers/NomEquipe')

router.get('/', NomEquipeCtrl.getAllNomEquipe)
router.post('/', NomEquipeCtrl.createNomEquipe)
router.get('/:id', NomEquipeCtrl.getOneNomEquipe)
router.put('/:id', NomEquipeCtrl.modifyNomEquipe)
router.delete('/:id', NomEquipeCtrl.deleteNomEquipe)

module.exports = router

