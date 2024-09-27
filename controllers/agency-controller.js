'use strict'

const agencyService = require('../services/agency-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils');

const getAgencies = async (req, res) => {
    try {
        let response = await agencyService.getAllAgency(req.params.id);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething unActive User list'))
    }
}

const addAgency = async (req, res) => {
    try {
        let response = await agencyService.addAgency(req.body.data);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething unActive User list'))
    }
}

const updateAgency = async (req, res) => {
    try {
        let response = await agencyService.updateAgency(req.params.type_id);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething unActive User list'))
    }
}


const deleteAgency = async (req, res) => {
    try {
        let response = await agencyService.deleteAgency(req.params.id, req.body);
        const statusCode = response.status_code || httpStatusCode.OK;
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while fething match list'))
    }
}


module.exports = {
    addAgency, deleteAgency, updateAgency, getAgencies
}
