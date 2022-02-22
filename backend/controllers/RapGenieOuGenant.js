const RapGenieOuGenant = require('../models/RapGenieOuGenant')

exports.createRapGenieOuGenant = (req, res, next) => {
  const rapGenieOuGenant = new RapGenieOuGenant({
    question: req.body.question,
    reponse: req.body.reponse,
    illustration: req.body.illustration,
  })
  rapGenieOuGenant
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

exports.getOneRapGenieOuGenant = (req, res, next) => {
  RapGenieOuGenant.findOne({
    _id: req.params.id,
  })
    .then((rapGenieOuGenant) => {
      res.status(200).json(rapGenieOuGenant)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyRapGenieOuGenant = (req, res, next) => {
  const rapGenieOuGenant = new RapGenieOuGenant({
    _id: req.params.id,
    question: req.body.question,
    reponse: req.body.reponse,
    illustration: req.body.illustration,
  })
  rapGenieOuGenant
    .updateOne({ _id: req.params.id }, rapGenieOuGenant)
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

exports.deleteRapGenieOuGenant = (req, res, next) => {
  RapGenieOuGenant.deleteOne({ _id: req.params.id })
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

exports.getAllRapGenieOuGenant = (req, res, next) => {
  RapGenieOuGenant.find()
    .then((rapGenieOuGenant) => {
      res.status(200).json(rapGenieOuGenant)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
