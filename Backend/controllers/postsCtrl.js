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

/* retourne un tableau d'objet post */
exports.findAllPost = (req, res) => {
  Post.find()
    .then((post) => res.status(201).json(post))
    .catch((error) => res.status(400).json({ error }));
};

//==================================

/* retourne  un objet Post correspondant a l'id passé en paramètre */
exports.findPost = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
};

// met à jour le post et retourne un message d'erreur le cas échéant
exports.modifyPost = (req, res) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.posts),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Post.updateOne(
    { _id: req.params.id, userId : res.locals.userId },
    { ...postsObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

/* supprime le post dont l'id est en paramètre */
exports.deletePost = (req, res, then) => {
  //recherche le poste dans la BDD
  Post.findOne({ _id: req.params.id, userId : res.locals.userId })
    .then((post) => {
      //récupère le chemin physique de l'image
      const filename = sauce.imageUrl.split("/images/")[1];
      // supprime l'image des dossiers du serveur
      fs.unlink(`images/${filename}`, () => {
        // supprime le post de la BDD et retourne un message le confirmant
        Post.deleteOne({ _id: req.params.id, userId : res.locals.userId })
          .then(() => res.status(200).json({ message: "Message supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    // erreur si le post n'a pu être recherché
    .catch((error) => res.status(500).json({ error }));
};






// gère les likes et les dislikes
exports.likePost = (req, res, then) => {
  // recherche la sauce dans la BDD
  Sauce.findOne({ _id: req.params.id })
    .then((post) => {
      // selon la valeur du like, un bloc de code différent sera exécuté
      if (
        req.body.like == -1 &&
        !sauce.usersDisliked.includes(req.body.userId)
      ) {
        /* n'aime pas : on incrémente les dislikes et on ajoute le userId au array usersDisliked*/
        sauce.dislikes++;
        // ajoute l'id de l'utilisateur au tableur des userDisliked
        sauce.usersDisliked.push(req.body.userId);
        // si l'id de l'utilisateur été déjà présent dans le tableau userLiked
        // on décrémente les likes et on le retire du tableau
        if (sauce.usersLiked.includes(req.body.userId)) {
          sauce.likes--;
          let index = sauce.usersLiked.indexOf(req.body.userId);
          sauce.usersLiked.splice(index, 1);
        }
      } else if (req.body.like == 0) {
        /* annule le vote : supprime le userId du array ou il se trouve et décrémente le 
                  likes ou dislikes selon la présence ou non de l'id dans le array*/
        if (sauce.usersLiked.includes(req.body.userId)) {
          sauce.likes--;
          let index = sauce.usersLiked.indexOf(req.body.userId);
          sauce.usersLiked.splice(index, 1);
        } else if (sauce.usersDisliked.includes(req.body.userId)) {
          sauce.dislikes--;
          let index = sauce.usersDisliked.indexOf(req.body.userId);
          sauce.usersDisliked.splice(index, 1);
        }
      } else if (
        req.body.like == 1 &&
        !sauce.usersLiked.includes(req.body.userId)
      ) {
        /* aime : incrémente les likes et ajoute le userId au array usersLiked*/
        sauce.likes++;
        //ajoute l'id de l'utilisateur dans le tableau userLiked
        sauce.usersLiked.push(req.body.userId);
        // si l'id de l'utilisateur été déjà présent dans le tableau userDisliked
        // on décrémente les dislikes et on le retire du tableau
        if (sauce.usersDisliked.includes(req.body.userId)) {
          sauce.dislikes--;
          let index = sauce.usersDisliked.indexOf(req.body.userId);
          sauce.usersDisliked.splice(index, 1);
        }
      } else {
        // Si la valeur de like passé en paramètre n'entre pas dans les 3 cas précèdent
        // un message d'erreur est retourné
        res.status(404).json({ message: "Error : unknown like type !" });
        return;
      }
      // met à jour la BDD avec les valeurs modifiés précédemment
      Sauce.updateOne(
        { _id: req.params.id },
        {
          likes: sauce.likes,
          dislikes: sauce.dislikes,
          usersLiked: sauce.usersLiked,
          usersDisliked: sauce.usersDisliked,
          _id: req.params.id,
        }
      )
        .then(() => {
          // retourne un message confirmant la mise à jour
          res.status(200).json({ message: "Like de la sauce modifié !" });
        })
        .catch((error) => {
          // message d'erreur si la sauce n'a pu être mise à jour
          res.status(400).json({ error });
        });
    })
    // message d'erreur si la sauce n'a pu être recherché
    .catch((error) => {
      res.status(404).json({ error });
    });
};