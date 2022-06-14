const userCtrl = require ('../controllers/userCtrl')
const auth = require('../middlewares/auth');

// Contient les fonctions qui s'appliquent aux différentes routes pour les utilisateurs

// On a besoin d'Express
const express = require('express');

const router = express.Router();

router.post('/signup', userCtrl.createUser);

router.post('/login', userCtrl.login);

router.delete('/', auth, userCtrl.deleteAccount);

module.exports = router;