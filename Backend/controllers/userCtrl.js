const models = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const { or } = require('sequelize/types');
const { Sequelize, Model, DataTypes } = require('sequelize');

require ("dotenv").config();

exports.createUser = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = models.users.build({
        nom: req.body.nom,
        prenom: req.body.prenom,
        sexe: req.body.sexe, 
        email: req.body.email,
        password: hash,
        isAdmin: req.body.admin, //besoin de confirmation
      });
      user
        .save()
        .then(() => res.status(201).json({ 
            message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {
  //Params
  const email = req.body.email
  const password = req.body.password
  const user = models.users

  if (email == null || password == null) {
      return res.status(400).json({error: "Merci de remplir le(s) champ(s) manquant(s) !"});
  }
  models.users.findOne({
      where: {email: email}
  })
      .then(user => {
          if (!user) {
              return res.status(200).json({error: "Utilisateur non trouvé Merci de vous inscrire ! "});
          }
          console.log(user)
          bcrypt.compare(password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(200).json({error: " Mot de passe incorrect ! "});
                  }
                  res.status(200).json({
                      nom: user.nom,
                      prenom: user.prenom,
                      userId: user.id,
                      sexe: user.sexe,
                      token: jwt.sign(
                          {userId: user.id},
                          "RANDOM_TOKEN_SECRET",
                          {expiresIn: "24h"}
                      )
                  });
              })
              .catch(error => res.status(500).json({error}))
      })
      .catch(error => res.status(500).json({error}));
};

exports.deleteAccount = (req, res, next) => {

    models.users.findOne({
        where: {id: res.locals.userId}
    })
        .then(user => {
                return user.destroy()
                    .then(() => res.status(200).json({message: "Le profil a été bien  supprimé !"}))
                    .catch(error => res.status(400).json({error: "Impossible de supprimer le profil !"}));
        })
}  
  
    