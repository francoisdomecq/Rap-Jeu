//Regarder CrossFeaturing.js pour comprendre le fonctionnement des routes

const express = require('express')
const router = express.Router()

const MythoPasMythoCtrl = require('../controllers/MythoPasMytho')

router.get('/', MythoPasMythoCtrl.getAllMythoPasMytho)
router.post('/', MythoPasMythoCtrl.createMythoPasMytho)
router.get('/:id', MythoPasMythoCtrl.getOneMythoPasMytho)
router.put('/:id', MythoPasMythoCtrl.modifyMythoPasMytho)
router.delete('/:id', MythoPasMythoCtrl.deleteMythoPasMytho)

module.exports = router

