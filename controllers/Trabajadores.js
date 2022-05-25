// hecho por Jesus
const { response } = require('express');
const {Trabajador} = require('../modelos');

const obtenerTrabajadores = async(req,res = response) =>{
    const { Limite = 10, Desde = 0} = req.query
    const query = {Estado:true};
    const [total, datos] = await Promise.all(
        [
            Trabajador.countDocuments(query),
            Trabajador.find(query),
        ]
    )
    res.json([
        total,
        datos,
    ])
}

const obtenerTrabajador = async (req,res = response)=>{
    const {Estado,...body} = req.body;
    const trabajador = await Trabajador.findOne({TRABAJADOR_CEDULA:body.TRABAJADOR_CEDULA}).catch((err)=> {res.status(400).json({status: 'No es una Cedula valida'})});
    res.json(trabajador);
}

//Busqueda de usuarios es por su cedula no por ID
const crearTrabajador = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const TrabajadorExiste = await Trabajador.findOne({TRABAJADOR_CEDULA:body.TRABAJADOR_CEDULA}).catch((err)=> {res.status(400).json({status: 'No es una ID valida'})});

    if (TrabajadorExiste){
        res.status(400).json({
            message:`El trabajador que intentas registrar ya existe ${TrabajadorExiste.TRABAJADOR_CEDULA}`
        })
    }
    const trabajador = new Trabajador(body);
    const TrabajadorNuevo = await trabajador.save();
    res.status(201).json(TrabajadorNuevo);
}


const actualizarTrabajador = async (req,res)=>{
    const {TRABAJADOR_CEDULA} = req.params;
    const {Estado, ...data} = req.body;
    const TrabajadorModificado = 
    await Trabajador.findOneAndUpdate(TRABAJADOR_CEDULA, data, { new:true }).catch((err)=> {res.status(400).json({status: 'No es una cedula valida'})});
    res.json(TrabajadorModificado);
}


const borrarTrabajador = async (req,res)=>{
    const { TRABAJADOR_CEDULA } = req.params;
    const TrabajadorBorrado = await Espacio.findOneAndUpdate(TRABAJADOR_CEDULA, {Estado:false}, {new:true}).catch((err)=> {res.status(400).json({status: 'No es una cedula valida'})});
    res.json(TrabajadorBorrado);
}

module.exports = {
    obtenerTrabajador,
    obtenerTrabajadores,
    crearTrabajador,
    actualizarTrabajador,
    borrarTrabajador
}

