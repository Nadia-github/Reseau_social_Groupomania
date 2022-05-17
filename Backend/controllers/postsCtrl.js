const models = require('../models');
const fs = require("fs");
const { Sequelize, Model, DataTypes } = require('sequelize');

/* Enregistre dans la BDD le post que l'utilisateur a crée */
exports.createPost = (req, res) => {
  const attachment = req.file ? `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }` : '';
  const post = models.posts.build({
    titre: req.body.titre,
    contenu: req.body.contenu,
    attachment: attachment,
    userId: res.locals.userId,
  });
  post
    .save()
    .then(() => res.status(201).json({ message: "Message enregistré!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllPost = (req, res, next) => {
  models.posts.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ["id", "titre", "contenu", "createdAt", "updatedAt"],
      include: [{
          model: models.users,
          attributes: ["nom", "prenom"]
      }]
  })
      .then(posts => {
          if (posts === null) {
              return res.status(404).json({error: "Il n'y a aucun post !"})
          }
          res.status(200).json({posts});
      })
      //.catch(error => res.status(400).json({error: error}))
}


/* retourne  un objet Post correspondant a l'id passé en paramètre */
exports.findPost = (req, res, next) => {
  const postId = req.params.id;
  models.posts.findOne({
      attributes: ["id", "UserId", "titre", "contenu", "createdAt", "updatedAt"],
      where: {id: postId},
      include: [{
          model: models.users,
          attributes: ["nom", "prenom"]
      }]
  })
      .then(post => {
          if (post == null) {
              return res.status(404).json({error: "Ce post n'existe pas !"})
          }
          res.status(200).json({post});
      })
      .catch(error => res.status(403).json({error: "L'id est incorrect"}))
}

// met à jour le post et retourne un message d'erreur le cas échéant
exports.modifyPost = (req, res, next) => {
  //Params
  const titre = req.body.titre;
  const contenu = req.body.contenu;

  models.posts.findOne({
      attributes: ["id", "userId", "titre", "contenu"],
      where: {id: req.params.id}
  })
      .then(post => {
          if (post.userId === res.locals.userId) {
              return post.update(req.body)
                  .then(() => res.status(200).json({post, message: "Le post bien été modifié !"}))
                  .catch(error => res.status(400).json({error: "Impossible de mettre à jour !"}));
          }
      })
      .catch(error => res.status(404).json({error: "Le post est introuvable !"}));
}

/* supprime le post dont l'id est en paramètre */
exports.deletePost = (req, res, next) => {
//recherche le poste dans la BDD
  models.posts.findOne({
      attributes: ["id", "userId"],
      where: {id: req.params.id}
  })
      .then(post => {
          if (post.userId === res.locals.userId) {
              return post.destroy()
                  // supprime le post de la BDD et retourne un message le confirmant
                  .then(() => res.status(200).json({id: post.id, message: "Le post a été bien  supprimé !"}))
                  // erreur si le post n'a pu être recherché
                  .catch(error => res.status(400).json({error: "Impossible de supprimer le psot !"}));
          }
      })
      .catch(error => res.status(404).json({error: "Le post n'a pas été  trouvé !"}));
}



