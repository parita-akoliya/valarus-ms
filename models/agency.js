const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')

require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const agencySchema = new mongoose.Schema({
    is_delete: {
        type: Boolean,
        required: false,
        default: false
    },
    agencyid: {
        type: Number,
        unique: true
    },
    created_at: {
        type: Date,
        required: false
    },
    updated_at: {
        type: Date,
        required: false
    },
    created_by: {
        type: String,
        required: false
    },
    updated_by: {
        type: String,
        required: false
    },
    address: {
        address1: {
            type: String,
            required: true,
        },
        address2: {
            type: String,
            required: false,
        },
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        length: 10,
        require: false,
        unique: true
    }
},
    {
        collection: 'agency'
    })
agencySchema.plugin(autoIncrement, {
    model: 'agencyid',
    field: 'id',
    startAt: 1
})
module.exports = mongoose.model('agency', agencySchema)
