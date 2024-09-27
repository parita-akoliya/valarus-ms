'use strict'

const clientService = require('../services/client-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')

const getClients = async (req, res) => {
    try {
        let response = await clientService.getAllClient(req.params.id);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething unActive User list'))
    }
}

const addClient = async (req, res) => {
    try {
        let response = await clientService.addClient(req.body.data);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething unActive User list'))
    }
}

const updateClient = async (req, res) => {
    try {
        let response = await clientService.updateClient(req.params.id,req.body.data);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething unActive User list'))
    }
}


const deleteClient = async (req, res) => {
    try {
        let response = await clientService.deleteClient(req.params.id, req.body);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething match list'))
    }
}


module.exports = {
    addClient, deleteClient, updateClient, getClients
}
