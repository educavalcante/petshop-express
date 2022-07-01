var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')
const userController = require('../controllers/userConttroler')
const outrosController = require('../controllers/outrosController')

router.get('/hello',petsController.hello)
router.get('/pets' , petsController.index)
router.get('/home',indexController.home)

router.get('/contatos', userController.contato)
router.get('/cadastro', userController.cadastro)
router.get('/login', userController.logar)

router.get('/servicos', outrosController.SERVICOS)
router.get('/sobre', outrosController.SOBRE)
module.exports = router;
