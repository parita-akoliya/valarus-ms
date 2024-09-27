'use strict'

const express = require('express');
const routes = express.Router();
const appController = require('../controllers/app-controller');

routes.post('/register', appController.register);
routes.get('/clients/:max_income', appController.fetchClientFromIncome);

module.exports = routes;
