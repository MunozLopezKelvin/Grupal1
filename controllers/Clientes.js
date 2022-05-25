//Hecho por Emanuel
const { response } = require('express');
const {Cliente} = require('../modelos');

const obtenerClientes = async(req,res = response) =>{
    const { Limite = 10, Desde = 0} = req.query
    const query = {Estado:true};
    const [total, datos] = await Promise.all(
        [
            Cliente.countDocuments(query),
            Cliente.find(query),
        ]
    )
    res.json([
        total,
        datos,
    ])
}


const obtenerCliente = async (req,res = response)=>{
    const {CLIENTE_NOMBRE} = req.params;
    const cliente = await Cliente.findOne(CLIENTE_NOMBRE).catch((err)=> {res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(cliente);
}


const crearCliente = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const ClienteExiste = await Cliente.findOne({
        CLIENTE_NOMBRE:body.CLIENTE_NOMBRE});

    if (ClienteExiste){
        res.status(400).json({
            message:`El Cliente con ese nombre ya existe ${CarroExiste.CLIENTE_NOMBRE}`
        })
    }
    const cliente = new Cliente(body);
    const ClienteNuevo = await cliente.save();
    res.status(201).json(ClienteNuevo);
}


const actualizarCliente = async (req,res)=>{
    const {CLIENTE_NOMBRE} = req.params;
    const {estado, ...body} = req.body;
    const ClienteModificado = await Cliente.findOneAndUpdate(CLIENTE_NOMBRE, body, { new:true }).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(ClienteModificado);
}


const borrarCliente = async (req,res)=>{
    const { CLIENTE_NOMBRE } = req.params;
    const ClienteBorrado = await Cliente.findOneAndUpdate(CLIENTE_NOMBRE, {estado:false}, {new:true});
    res.json(ClienteBorrado);
}

module.exports = {
    obtenerClientes,
    obtenerCliente,
    actualizarCliente,
    crearCliente,
    borrarCliente,
}



