//Regarder CrossFeaturing.js pour comprendre le fonctionnement des requêtes

const Rappeur = require('../models/Rappeur')

exports.createRappeur = (req, res, next) => {
  const rappeur = new Rappeur({
    nom:req.body.nom,
  })
  rappeur
    .save()
    .then(() => {
      res.status(201).json({
        message: `${rappeur.nom} saved succesfully`,
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.getOneRappeur = (req, res, next) => {
  Rappeur.findOne({
    _id: req.params.id,
  })
    .then((rappeur) => {
      res.status(200).json(rappeur)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyRappeur = (req, res, next) => {
  const rappeur = new Rappeur({
    _id: req.params.id,
    nom: req.body.nom,
  })
  rappeur
    .updateOne({ _id: req.params.id }, rappeur)
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

exports.deleteRappeur = (req, res, next) => {
  Rappeur.deleteOne({ _id: req.params.id })
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

exports.getAllRappeur = (req, res, next) => {
  Rappeur.find()
    .then((rappeur) => {
      res.status(200).json(rappeur)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
