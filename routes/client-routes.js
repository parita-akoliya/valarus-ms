'use strict'

const express = require('express');
const routes = express.Router();
const clientController = require('../controllers/client-controller')
routes.post('/', clientController.addClient);
routes.get('/', clientController.getClients);
routes.put('/:id', clientController.updateClient);
routes.delete('/:id', clientController.deleteClient);


module.exports = routes;
