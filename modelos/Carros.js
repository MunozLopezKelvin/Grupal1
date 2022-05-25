//Paul
const { Schema, model } = require ('mongoose');
const CarrosSchema = Schema({
    CARRO_PLACA:{
        type: String,
        required: [true,'La placa del vehiculo es obligatiro'],
        unique: true
    },
    CARRO_MODELO:{
        type: String,
        required: true
    },
    CARRO_AÑO:{
        type: Number,
        required: true
    },
    CARRO_COMENTARIO:{
        type: String,
        required: true
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }

});

module.exports = model('Carro', CarrosSchema)


