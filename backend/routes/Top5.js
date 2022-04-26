//Regarder CrossFeaturing.js pour comprendre le fonctionnement des routes

const express = require('express')
const router = express.Router()

const Top5Ctrl = require('../controllers/Top5')

router.get('/', Top5Ctrl.getAllTop5)
router.post('/', Top5Ctrl.createTop5)
router.get('/:id', Top5Ctrl.getOneTop5)
router.put('/:id', Top5Ctrl.modifyTop5)
router.delete('/:id', Top5Ctrl.deleteTop5)

module.exports = router
