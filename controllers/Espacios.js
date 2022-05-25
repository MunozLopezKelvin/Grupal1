// hecho por Jesus
const { response } = require('express');
const {Espacio} = require('../modelos');

const obtenerEspacios = async(req,res = response) =>{
    const { Limite = 10, Desde = 0} = req.query
    const query = {Estado:true};
    const [total, datos] = await Promise.all(
        [
            Espacio.countDocuments(query),
            Espacio.find(query),
        ]
    )
    res.json([
        total,
        datos,
    ])
}

const obtenerEspacio = async (req,res = response)=>{
    const {ESPACIO_ID} = req.params;
    const espacio = await Espacio.findOne(ESPACIO_ID).catch((err)=> {res.status(400).json({status: 'No es una ID valida'})});
    res.json(espacio);
}


const crearEspacio = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const EspacioExiste = await Espacio.findOne({ESPACIO_ID:body.ESPACIO_ID});

    if (EspacioExiste){
        res.status(400).json({
            message:`El espacio que intentas registrar ya existe ${EspacioExiste.ESPACIO_ID}`
        })
    }
    const espacio = new espacio(body);
    const EspacioNuevo = await espacio.save();
    res.status(201).json(EspacioNuevo);
}


const actualizarEspacio = async (req,res)=>{
    const {ESPACIO_ID} = req.params;
    const {Estado, ...data} = req.body;
    const EspacioModificado = 
    await Espacio.findByIdAndUpdate(ESPACIO_ID, data, { new:true });
    res.json(EspacioModificado);
}


const borrarEspacio = async (req,res)=>{
    const { ESPACIO_ID } = req.params;
    const EspacioBorrado = await Espacio.indOneAndUpdate(ESPACIO_ID, {Estado:false}, {new:true});
    res.json(EspacioBorrado);
}

module.exports = {
    obtenerEspacios,
    obtenerEspacio,
    crearEspacio,
    actualizarEspacio,
    borrarEspacio
}

