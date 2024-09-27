'use strict'

const agencyService = require('../services/agency-service')
const clientService = require('../services/client-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')

const register = async (req, res) => {
    try {
        let clientResponse = null
        if (req.body) {
            let agencyId = await agencyService.addAgency(req.body.data.agency)
            clientResponse = await clientService.addClient(Object.assign({}, req.body.data.client, { agencyid: agencyId.data[0]['_id'] }))
        }
        const statusCode = clientResponse.status_code || httpStatusCode.OK
        return res.status(statusCode).send(clientResponse)
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting user data'))
    }
}
const fetchClientFromIncome = async (req, res) => {
    try {
        let response = null
        if (req.body) {
            response = await clientService.fectchFromIncome(req.params.max_income)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting user data'))
    }
}

module.exports = {
    register,
    fetchClientFromIncome
}
