
// On a besoin d'Express
const express = require('express');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postsCtrl = require ("../controllers/postsCtrl");

// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();

router.post('/', auth, multer, postsCtrl.createPost);

router.get('/', auth, multer, postsCtrl.findAllPost);

router.get('/:id', auth, multer, postsCtrl.findPost);

router.put('/:id', auth, multer, postsCtrl.modifyPost);

router.delete('/:id', auth, postsCtrl.deletePost);

//router.post('/:id/like', auth, postsCtrl.likePost);


module.exports = router;

