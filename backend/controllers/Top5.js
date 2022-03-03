const { render } = require('../app')
const Top5 = require('../models/Top5')

exports.createTop5 = (req, res, next) => {
  const top5 = new Top5({
    theme: req.body.theme,
    suggestions:req.body.suggestions
  })
  top5
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

exports.getOneTop5 = (req, res, next) => {
  Top5.findOne({
    _id: req.params.id,
  })
    .then((top5) => {
      res.status(200).json(top5)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyTop5= (req, res, next) => {
  const top5 = new Top5({
    _id: req.params.id,
    theme: req.body.theme,
  })
  top5
    .updateOne({ _id: req.params.id }, top5)
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

exports.deleteTop5 = (req, res, next) => {
  Top5.deleteOne({ _id: req.params.id })
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

exports.getAllTop5 = (req, res, next) => {
  Top5.find()
    .then((top5) => {
      res.status(200).json(top5)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
