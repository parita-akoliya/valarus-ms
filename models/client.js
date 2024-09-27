const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')

require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
    is_delete: {
        type: Boolean,
        required: false,
        default: false
    },
    clientid: {
        type: Number,
        required: true,
        unique: true
    },
    agencyid: {
        type: Schema.Types.ObjectId,
        ref: 'agency',
        required: true
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
    totalbill: {
        type: Number,
        required: true,
        default: 0
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: false,
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone_number: {
        type: Number,
        length: 10,
        require: false,
        unique: true
    }
},
    {
        collection: 'client'
    })
clientSchema.plugin(autoIncrement, {
    model: 'client',
    field: 'clientid',
    startAt: 1
})
module.exports = mongoose.model('clientid', clientSchema)
