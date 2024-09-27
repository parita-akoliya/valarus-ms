'use strict'

const express = require('express');
const routes = express.Router();
const agencyController = require('../controllers/agency-controller');

routes.post('/', agencyController.addAgency);
routes.get('/:id', agencyController.getAgencies);
routes.put('/:id', agencyController.updateAgency);
routes.delete('/:id', agencyController.deleteAgency);

module.exports = routes;
