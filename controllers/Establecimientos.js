//Hecho por Yudeh
const { response } = require('express');
const { Establecimiento } = require('../modelos');

const obtenerEstablecimientos = async (req,res = response)=>{
    const { limite =10, desde=0} = req.query;
    const query = { estado:true };
    const [total, datos] = await Promise.all()([
        Establecimiento.countDocuments(query),
        Establecimiento.find(query)
    ])

res.json([
    total,
    datos
])
}


const obtenerEstablecimiento = async (req,res = response)=>{
    const {ESTABLECIMIENTO_NOMBRE} = req.params;
    const establecimiento = await Establecimiento.find(ESTABLECIMIENTO_NOMBRE).catch((err)=>{res.status(400).json({status:'No es una ID valida', error:err})});
    res.json(establecimiento);
}


const crearEstablecimiento = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const EstablecimientoExiste = await Establecimiento.find({ESTABLECIMIENTO_NOMBRE:body.ESTABLECIMIENTO_NOMBRE});

    if (EstablecimientoExiste){
        res.status(400).json({
            message:`El Establecimiento con esa placa ya existe ${EstablecimientoExiste.ESTABLECIMIENTO_NOMBRE}`
        })
    }
    const establecimiento = new Establecimiento(body);
    const EstablecimientoNuevo = await establecimiento.save();
    res.status(201).json(EstablecimientoNuevo);
}


const actualizarEstablecimiento = async (req,res)=>{
    const {ESTABLECIMIENTO_NOMBRE} = req.params;
    const {Estado, ...data} = req.body;
    const EstablecimientoModificado = 
    await Establecimiento.findOneAndUpdate(ESTABLECIMIENTO_NOMBRE, data, { new:true });
    res.json(EstablecimientoModificado);
}


const borrarEstablecimiento = async (req,res)=>{
    const { ESTABLECIMIENTO_NOMBRE } = req.params;
    const EstablecimientoBorrado = await Establecimiento.findOneAndUpdate(ESTABLECIMIENTO_NOMBRE, {Estado:false}, {new:true});
    res.json(EstablecimientoBorrado);
}

module.exports = {
    obtenerEstablecimientos,
    obtenerEstablecimiento,
    crearEstablecimiento,
    actualizarEstablecimiento,
    borrarEstablecimiento
}

