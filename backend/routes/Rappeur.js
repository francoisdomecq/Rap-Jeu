const express = require('express')
const router = express.Router()

const Rappeur = require('../controllers/Rappeur')

router.get('/', Rappeur.getAllRappeur)
router.post('/', Rappeur.createRappeur )
router.get('/:id', Rappeur.getOneRappeur)
router.put('/:id', Rappeur.modifyRappeur)
router.delete('/:id', Rappeur.deleteRappeur)

module.exports = router

