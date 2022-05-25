//Hecho por Paul
const { response } = require('express');
const { Carro } = require('../modelos');

const obtenerCarros = async (req,res = response)=>{
    const { limite =10, desde=0} = req.query;
    const query = { estado:true };
    const [total, datos] = await Promise.all([
        Carro.countDocuments(query),
        Carro.find(query)
    ])

res.json([
    total,
    datos
])
}


const obtenerCarro = async (req,res = response)=>{
    const {Estado,...body} = req.body;
    const carro = await Carro.findOne({CARRO_PLACA:body.CARRO_PLACA}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(carro);
}


const crearCarro = async (req,res)=>{
    const {Estado, ...body} = req.body;

    const CarroExiste = await Carro.findOne({CARRO_PLACA:body.CARRO_PLACA});

    if (CarroExiste){
        res.status(400).json({
            message:`El Carro con esa placa ya existe ${CarroExiste.CARRO_PLACA}`
        })
    }
    const carro = new Carro(body);
    const CarroNuevo = await carro.save();
    res.status(201).json(CarroNuevo);
}


const actualizarCarro = async (req,res)=>{
    const {CARRO_PLACA} = req.params;
    const {Estado, ...data} = req.body;
    const CarroModificado = 
    await Carro.findOneAndUpdate(CARRO_PLACA, data, { new:true });
    res.json(CarroModificado);
}


const borrarCarro = async (req,res)=>{
    const { CARRO_PLACA } = req.params;
    const CarroBorrado = await Carro.findOneAndUpdate(CARRO_PLACA, {Estado:false}, {new:true});
    res.json(CarroBorrado);
}

module.exports = {
    obtenerCarros,
    obtenerCarro,
    crearCarro,
    actualizarCarro,
    borrarCarro
}

