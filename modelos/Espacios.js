//Ian
const { Schema, model } = require ('mongoose');

const EspaciosSchema = Schema({
    ESPACIO_ID:{
        type: Number,
        required: [true,'El ID del espacio es obligatiro'],
        unique: true
    },

    ESPACIO_ESTADO:{
        type: String,
        required: true
    },

    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }

});

module.exports = model('Espacio', EspaciosSchema)


