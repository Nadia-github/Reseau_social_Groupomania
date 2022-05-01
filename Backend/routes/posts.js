
// On a besoin d'Express
const express = require('express');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postsCtrl = require ("../controllers/postsCtrl");

// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();

/*router.post('/', auth, multer, postsCtrl.createPost);

router.get('/', auth, postsCtrl.findAllSauces);

router.get('/:id', auth, postsCtrl.findSauce);

router.put('/:id', auth, multer, postsCtrl.modifySauce);

router.delete('/:id', auth, postsCtrl.deleteSauce);

router.post('/:id/like', auth, postsCtrl.likeSauce);*/


module.exports = router;

