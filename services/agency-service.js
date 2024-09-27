'use strict'

const { bcrypt, logger, httpStatusCode, generateSuccessResponse, generateErrorResponse } = require('../lib/utils');
const agency = require('../models/agency');
const client = require('../models/client');

const addAgency = async (body) => {
    try {
        let response = await agency.insertMany(body);
        return generateSuccessResponse(response, 'Agency added', httpStatusCode.OK);
    } catch (error) {
        console.log(error);
        logger.error('Error while inserting agency', error);
        return generateErrorResponse(error, 'Error while inserting agency', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

const getAllAgency = async (id) => {
    try {
        let response
        if (id) response = await agency.find({ agencyid: id });
        else response = await agency.find();
        return generateSuccessResponse(response, 'Agency added', httpStatusCode.OK);
    } catch (error) {
        console.log(error);
        logger.error('Error while fetching agency', error);
        return generateErrorResponse(error, 'Error while fetching agency', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

const updateAgency = async (id, body) => {
    try {
        let result = await agency.update({ agencyid: id }, { $set: body });
        return generateSuccessResponse(result, 'Agency added', httpStatusCode.OK);
    } catch (error) {
        console.log(error);
        logger.error('Error while updating agency', error);
        return generateErrorResponse(error, 'Error while updating agency', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

const deleteAgency = async (id, body) => {
    try {
        let result = await agency.update({ id: id }, { $set: { is_delete: true } });
        return generateSuccessResponse(result, 'Agency deleted', httpStatusCode.OK);
    } catch (error) {
        logger.error('Error while deleting agency', error);
        return generateErrorResponse(error, 'Error while deleting agency', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    addAgency,
    getAllAgency,
    updateAgency,
    deleteAgency
}
