const NomEquipe = require('../models/NomEquipe')

exports.createNomEquipe = (req, res, next) => {
  const nomEquipe = new NomEquipe({
    question: req.body.question,
    debutNomE1: req.body.debutNomE1,
    debutNomE2: req.body.debutNomE2,
  })
  nomEquipe
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

exports.getOneNomEquipe = (req, res, next) => {
  NomEquipe.findOne({
    _id: req.params.id,
  })
    .then((nomEquipe) => {
      res.status(200).json(nomEquipe)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyNomEquipe = (req, res, next) => {
  const nomEquipe = new NomEquipe({
    _id: req.params.id,
    question: req.body.question,
    debutNomE1: req.body.debutNomE1,
    debutNomE2: req.body.debutNomE2,
  })
  nomEquipe
    .updateOne({ _id: req.params.id }, nomEquipe)
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

exports.deleteNomEquipe = (req, res, next) => {
  NomEquipe.deleteOne({ _id: req.params.id })
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

exports.getAllNomEquipe = (req, res, next) => {
  NomEquipe.find()
    .then((nomEquipe) => {
      res.status(200).json(nomEquipe)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
