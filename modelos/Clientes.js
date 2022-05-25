const { Schema, model, default: mongoose } = require ('mongoose');
const mongoose = require (mongoose);

const ClientesSchema = Schema({
    CLIENTE_ID:{
        type: Number,
        required: [true,'El ID del cliente es obligatiro'],
        unique: true
    },
    CLIENTE_NOMBRE:{
        type: String,
        required: true
    },
    CLIENTE_CEDULA:{
        type: String,
        required: true
    },
    CLIENTE_TELEFONO:{
        type: String,
        required: true
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }

});

module.exports = model('Cliente', ClientesSchema)