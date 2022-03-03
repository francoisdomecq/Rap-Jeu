const Enchere = require('../models/Encheres')

exports.createEnchere = (req, res, next) => {
  const enchere = new Enchere({
    theme: req.body.theme,
    suggestions:req.body.suggestions
  })
  enchere
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

exports.getOneEnchere = (req, res, next) => {
  Enchere.findOne({
    _id: req.params.id,
  })
    .then((enchere) => {
      res.status(200).json(enchere)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyEnchere = (req, res, next) => {
  const enchere = new Enchere({
    _id: req.params.id,
    theme: req.body.theme,
  })
  enchere
    .updateOne({ _id: req.params.id }, enchere)
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

exports.deleteEnchere = (req, res, next) => {
  Enchere.deleteOne({ _id: req.params.id })
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

exports.getAllEnchere = (req, res, next) => {
  Enchere.find()
    .then((enchere) => {
      res.status(200).json(enchere)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
