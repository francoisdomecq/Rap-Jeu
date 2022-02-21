const express = require('express')
const router = express.Router()

const CrossFeaturingCtrl = require('../controllers/CrossFeaturing')

router.get('/', CrossFeaturingCtrl.getAllCrossFeaturing)
router.post('/', CrossFeaturingCtrl.createCrossFeaturing)
router.get('/:id', CrossFeaturingCtrl.getOneCrossFeaturing)
router.put('/:id', CrossFeaturingCtrl.modifyCrossFeaturing)
router.delete('/:id', CrossFeaturingCtrl.deleteCrossFeaturing)

module.exports = router
