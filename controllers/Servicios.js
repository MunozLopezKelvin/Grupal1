//Hecho por Ian
const { response } = require('express');
const { Servicio } = require('../modelos');

const obtenerServicios = async (req,res = response)=>{
    const { limite =10, desde=0} = req.query;
    const query = { estado:true };
    const [total, datos] = await Promise.all()([
        Servicios.countDocuments(query),
        Servicios.find(query)
    ])
res.json([
    total,
    datos
])
}


const obtenerServicio = async (req,res = response)=>{
    const {SERVICIO_NOMBRE} = req.params;
    const servicio = await Servicios.findOne(SERVICIO_NOMBRE).catch((err)=>{res.status(400).json({status:'No es una ID valida', error:err})});
    res.json(servicio);
}


const crearServicio = async (req,res)=>{
    const {Estado, ...body} = req.body;
   /*  const ServicioExiste = await Carros.findOne({SERVICIO_NOMBRE:body.SERVICIO_NOMBRE});

    if (ServicioExiste){
        res.status(400).json({
            message:`Servicio con ese nombre ya existe${ServicioExiste.SERVICIO_NOMBRE}`
        })
    } */
    const servicio = new Servicio(body);
    const ServicioNuevo = await servicio.save();
    res.status(201).json(ServicioNuevo);
}


const actualizarServicio = async (req,res)=>{
    const {SERVICIO_ID} = req.params;
    const {Estado, ...data} = req.body;
    const ServicioModificado = await Servicios.findByIdAndUpdate(SERVICIO_ID, data, { new:true }).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(ServicioModificado);
}


const borrarServicio = async (req,res)=>{
    const {SERVICIO_ID} = req.params;
    const ServicioBorrado = await Servicios.findByIdAndUpdate(SERVICIO_ID, {Estado:false}, {new:true}).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(ServicioBorrado);
}

module.exports = {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    borrarServicio
}