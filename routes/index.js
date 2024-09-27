'use strict'

const agencyRoutes = require('./agency-routes')
const clientRoutes = require('./client-routes')
const appRoutes = require('./app-routes')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger')
module.exports = function (app) {
    app.use('/api/client', clientRoutes)
    app.use('/api/agency', agencyRoutes)
    app.use('/api', appRoutes)
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}
