//Jesus
const mongoose = require ('mongoose');
const { Schema, model } = require ('mongoose');


const TrabajadoresSchema = Schema({
    TRABAJADOR_ID:{
        type: String,
        required: [true,'El ID del trabajador es obligatiro'],
        unique: true
    },
    TRABAJADOR_NOMBRE:{
        type: String,
        required: true
    },
    TRABAJADOR_APELLIDO:{
        type: String
    },
    TRABAJADOR_CEDULA:{
        type: String,
        required: true,
        unique: true
    },
    TRABAJADOR_TELEFONO:{
        type: Number,
        required: true
    },
    TRABAJADOR_CARGO:{
        type: String,
        required: true
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});

module.exports = model('Trabajador', TrabajadoresSchema)