const CrossFeaturing = require('../models/CrossFeaturing')

//Permet d'ajouter un objet CrossFeaturing dans la base de données
exports.createCrossFeaturing = (req, res, next) => {
  //On crée l'objet en utilisant le corps de la requête
  const crossFeaturing = new CrossFeaturing({
    rappeur1: req.body.rappeur1,
    rappeur2: req.body.rappeur2,
  })
  //On sauvegarde l'objet, si tout se passe bien on affiche un message de confirmation, sinon message d'erreur
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

//Permet de récupérer un crossFeaturing dont on a spécifié l'id
exports.getOneCrossFeaturing = (req, res, next) => {
  //On récupère le crossfeaturing qui a le même id que celui spécifié en paramètre de requête
  CrossFeaturing.findOne({
    _id: req.params.id,
  })
    //On le retourne
    .then((crossFeaturing) => {
      res.status(200).json(crossFeaturing)
    })
    //Message d'erreur en cas d'erreur
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

//Permet de modifier un crossfeaturing dont on a spécifié l'id
exports.modifyCrossFeaturing = (req, res, next) => {
  //On crée un nouvel objet crossFeaturing en utilisant le corps de la requête
  const crossFeaturing = new CrossFeaturing({
    _id: req.params.id,
    rappeur1: req.body.rappeur1,
    rappeur2: req.body.rappeur2,
  })
  //On met à jour le crossFeaturing existant en le remplacant par celui créé juste au dessus
  crossFeaturing
    .updateOne({ _id: req.params.id }, crossFeaturing)
    //Message de confirmation
    .then(() => {
      res.status(201).json({
        message: 'Thing updated successfully!',
      })
    })
    //Message d'erreur
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Permet de supprimer un crossFeaturing dont on a spécifié l'id
exports.deleteCrossFeaturing = (req, res, next) => {
  //On supprime le crossFeaturing qui a le même id que celui spécifié en paramètre de la requête
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

//Permet de récupérer tous les crossFeaturings de la base de données
exports.getAllCrossFeaturing = (req, res, next) => {
  //On retourne tous les crossFeaturings
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
