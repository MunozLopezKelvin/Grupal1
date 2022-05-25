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
    const {TRABAJADOR_CEDULA} = req.params;
    const trabajador = await Trabajador.findOne(TRABAJADOR_CEDULA).catch((err)=> {res.status(400).json({status: 'No es una ID valida'})});
    res.json(trabajador);
}

//Busqueda de usuarios es por su cedula no por ID
const crearTrabajador = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const TrabajadorExiste = await Trabajador.findOne({TRABAJADOR_CEDULA:body.TRABAJADOR_CEDULA});

    if (TrabajadorExiste){
        res.status(400).json({
            message:`El espacio que intentas registrar ya existe ${TrabajadorExiste.TRABAJADOR_CEDULA}`
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
    await Trabajador.findOneAndUpdate(id, data, { new:true });
    res.json(TrabajadorModificado);
}


const borrarTrabajador = async (req,res)=>{
    const { id } = req.params;
    const TrabajadorBorrado = await Espacio.findOneAndUpdate(id, {Estado:false}, {new:true});
    res.json(TrabajadorBorrado);
}

module.exports = {
    obtenerTrabajadores,
    obtenerTrabajador,
    crearTrabajador,
    actualizarTrabajador,
    borrarTrabajador
}

