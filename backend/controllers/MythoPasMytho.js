//Regarder CrossFeaturing.js pour comprendre le fonctionnement des requêtes

const MythoPasMytho = require('../models/MythoPasMytho')

exports.createMythoPasMytho = (req, res, next) => {
  const mythoPasMytho = new MythoPasMytho({
    question: req.body.question,
    reponse: req.body.reponse,
    illustration: req.body.illustration,
    type:req.body.type
  })
  mythoPasMytho
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

exports.getOneMythoPasMytho = (req, res, next) => {
  MythoPasMytho.findOne({
    _id: req.params.id,
  })
    .then((mythoPasMytho) => {
      res.status(200).json(mythoPasMytho)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.modifyMythoPasMytho = (req, res, next) => {
  const mythoPasMytho = new MythoPasMytho({
    _id: req.params.id,
    question: req.body.question,
    reponse: req.body.reponse,
    illustration: req.body.illustration,
  })
  mythoPasMytho
    .updateOne({ _id: req.params.id }, mythoPasMytho)
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

exports.deleteMythoPasMytho = (req, res, next) => {
  MythoPasMytho.deleteOne({ _id: req.params.id })
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

exports.getAllMythoPasMytho = (req, res, next) => {
  MythoPasMytho.find()
    .then((mythoPasMytho) => {
      res.status(200).json(mythoPasMytho)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
