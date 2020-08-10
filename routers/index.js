const express = require('express');
const motoristaController = require('../controllers/motoristaController');
const veiculoController   = require('../controllers/veiculoController');

const router = express.Router();

//ROTAS PARA MOTORISTA
router.get('/listMotorista',motoristaController.listMotorista);
router.get('/insertMotorista',motoristaController.insertMotorista);
router.get('/updateMotorista',motoristaController.updateMotorista);
router.get('/deleteMotorista',motoristaController.deleteMotorista);

//ROTAS PARA VEICULOS
router.get('/listVeiculo',veiculoController.listVeiculo);
router.get('/insertVeiculo',veiculoController.insertVeiculo);
router.get('/updateVeiculo',veiculoController.updateVeiculo);
router.get('/deleteVeiculo',veiculoController.deleteVeiculo);


module.exports = router;