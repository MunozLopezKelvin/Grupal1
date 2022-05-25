//Manuel
const mongoose = require ('mongoose');
const { Schema, model } = require ('mongoose');

const ReservasSchema = Schema({
    RESERVACION_ID:{
        type: Number,
        required: [true,'El ID de la reservacion es obligatiro'],
        unique: true
    },
    CLIENTE_ID:{
        type: mongoose.Types.ObjectId, ref: "Clientes"
    },
    SERVICIO_ID:{
        type: mongoose.Types.ObjectId, ref: "Servicios"
    },
    ESTABLECIMIENTO_ID:{
        type: mongoose.Types.ObjectId, ref: "Establecimientos"
    },
    RESERVACION_PRECIO:{
        type: Number,
        required: true
    },
    RESERVACION_FECHA : {
        type: Date,
        required: true
    },
    RESERVACION_HORA : {
        type: String,
        required: true
    },
    CARRO_PLACA:{
        type: mongoose.Types.ObjectId,ref: "Carros"
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});

module.exports = model('Reserva', ReservasSchema)