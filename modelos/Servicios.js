//Yudeh
const mongoose = require ('mongoose');
const { Schema, model } = require ('mongoose');

const ServiciosSchema = Schema({
    SERVICIO_ID:{
        type: Number,
        required: [true,'El ID del servicio es obligatiro'],
        unique: true
    },

    SERVICIO_NOMBRE:{
        type: String,
        required: true
    },
    SERVICIO_PRECIO:{
        type: Number
    },
    SERVICIO_TIEMPO:{
        type: String
    },
    ESTABLECIMIENTO_NOMBRE: { 
        type: mongoose.Types.ObjectId,ref:"Establecimiento"
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});

module.exports = model('Servicio', ServiciosSchema)