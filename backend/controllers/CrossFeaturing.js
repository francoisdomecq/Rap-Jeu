const CrossFeaturing = require('../models/CrossFeaturing')

exports.createCrossFeaturing = (req, res, next) => {
  const crossFeaturing = new CrossFeaturing({
    rappeur1:req.body.rappeur1,
    rappeur2:req.body.rappeur2,
  })
  crossFeaturing
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Post saved successfully!',
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.getOneCrossFeaturing = (req, res, next) => {
  CrossFeaturing.findOne({
    _id: req.params.id,
  })
    .then((crossFeaturing) => {
      res.status(200).json(crossFeaturing)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyCrossFeaturing = (req, res, next) => {
  const crossFeaturing = new CrossFeaturing({
    _id: req.params.id,
    rappeur1:req.body.rappeur1,
    rappeur2:req.body.rappeur2
     
  })
  crossFeaturing.updateOne({ _id: req.params.id }, crossFeaturing)
    .then(() => {
      res.status(201).json({
        message: 'Thing updated successfully!',
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.deleteCrossFeaturing = (req, res, next) => {
CrossFeaturing.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: 'Deleted!',
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.getAllCrossFeaturing = (req, res, next) => {
  CrossFeaturing.find()
    .then((crossFeaturing) => {
      res.status(200).json(crossFeaturing)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
