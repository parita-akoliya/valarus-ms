'use strict'

const { logger, httpStatusCode, generateSuccessResponse, generateErrorResponse } = require('../lib/utils');
const client = require('../models/client');

const addClient = async (body) => {
    try {
        let response = await client.insertMany(body);
        return generateSuccessResponse(response, 'Client added', httpStatusCode.OK);
    } catch (error) {
        console.log(error);
        logger.error('Error while inserting client', error);
        return generateErrorResponse(error, 'Error while inserting client', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

const getAllClient = async (id) => {
    try {
        let response
        if (id) response = await client.find({ agencyid: id, is_delete: false });
        else response = await client.find();
        return generateSuccessResponse(response, 'Client added', httpStatusCode.OK);
    } catch (error) {
        console.log(error);
        logger.error('Error while fetching client', error);
        return generateErrorResponse(error, 'Error while fetching client', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

const fectchFromIncome = async (income) => {
    try {
        let result = await client.find({
            totalbill: {
                $gte: income
            }
        }, { '_id': 0, 'totalbill': 1, 'agencyid': 1, 'name': 1 }).populate('agencyid', { 'name': 1, '_id': 0 });
        return generateSuccessResponse(result, 'Agency fetched', httpStatusCode.OK);
    } catch (error) {
        logger.error('Error while deleting agency', error);
        return generateErrorResponse(error, 'Error while deleting agency', httpStatusCode.INTERNAL_SERVER_ERROR);
    }

}

const updateClient = async (id, body) => {
    try {
        let result = await client.update({ clientid: id, is_delete: false }, { $set: body });
        if (result['nModified'] > 0) {
            return generateSuccessResponse(body, 'Client updated', httpStatusCode.OK);
        }
        else {
            return generateSuccessResponse(body, 'Client not updated', httpStatusCode.OK);
        }
    } catch (error) {
        console.log(error);
        logger.error('Error while updating client', error);
        return generateErrorResponse(error, 'Error while updating client', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

const deleteClient = async (id, body) => {
    try {
        let result = await user.update({ id: id }, { $set: { is_delete: true } });
        return generateSuccessResponse(result, 'Client deleted', httpStatusCode.OK);
    } catch (error) {
        logger.error('Error while deleting client', error);
        return generateErrorResponse(error, 'Error while deleting client', httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    addClient,
    getAllClient,
    updateClient,
    deleteClient,
    fectchFromIncome
}
