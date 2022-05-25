//Hecho por Emanuel
const { response } = require('express');
const {Reserva} = require('../modelos');

const obtenerReservas = async(req,res = response) =>{
    const { Limite = 10, Desde = 0} = req.query
    const query = {Estado:true};
    const [total, datos] = await Promise.all(
        [
            Reserva.countDocuments(query),
            Reserva.find(query),

        ]
    )
    res.json([
        total,
        datos,
    ])
}


const obtenerReserva = async (req,res = response)=>{
    const {Estado,...body} = req.body;
    const reserva = await Reserva.findOne({RESERVACION_ID:body.RESERVACION_ID}).catch((err)=> {res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(reserva);
}


const crearReserva = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const ReservaExiste = await Reserva.findOne({
        RESERVACION_ID:body.RESERVACION_ID});

    if (ReservaExiste){
        res.status(400).json({
            message:`Reserva con ese ID ya existe ${ReservaExiste.RESERVACION_ID}`
        })
    }
    const reserva = new reserva(body);
    const ReservaNuevo = await reserva.save();
    res.status(201).json(ReservaNuevo);
}


const actualizarReserva = async (req,res)=>{
    const {RESERVACION_ID} = req.params;
    const {estado, ...body} = req.body;
    const ReservaModificada = await Cliente.findOneAndUpdate(RESERVACION_ID, body, { new:true }).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(ReservaModificada);
}


const borrarReserva = async (req,res)=>{
    const { RESERVACION_ID } = req.params;
    const ReservaBorrado = await Reserva.findOneAndUpdate(RESERVACION_ID, {estado:false}, {new:true});
    res.json(ReservaBorrado);
}

module.exports = {
    obtenerReservas,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    borrarReserva,
}