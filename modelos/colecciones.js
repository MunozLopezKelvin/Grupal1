//const {Schema, model, default: mongoose} = require('mongoose');
const {dbConnection} =require ('../database/config');
const mongoose = require('mongoose');
//const conexion="mongodb+srv://aw2:Admin001@cluster0.tflf2.mongodb.net/Prueba?retryWrites=true&w=majority";
const { Timestamp, Decimal128, Double } = require('bson');

//const mongoose = require('mongoose');

const conexion = "mongodb+srv://aw2:Admin001@cluster0.tflf2.mongodb.net/prueba1?retryWrites=true&w=majority";

(async ()=>{
    //const establecerconexion = await dbConnection;
    const estadoConexion = await mongoose.connect(conexion);

    

    

    

    

    
    const Carros = mongoose.model("Carro",{
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
    
    const Registros = mongoose.model("Registro",{
        REGISTRO_MANTENIMIENTO:{
            type: String,
            required: [true,'El registro del mantenimiento es obligatiro'],
            unique: true
        },
        REGISTRO_FECHA:{
            type: Date,
            required: true
        },
        REGISTRO_KILOMETRAJE:{
            type: Number,
            required: true
        },
        CARRO_PLACA : {
            type: mongoose.Types.ObjectId,ref: "Carros"
        },
        Estado: {
            type : Boolean,
            required: true,
            default: true,
        }
    
    });
    
    const Reservacion = mongoose.model("Reservaciones",{
        RESERVACION_ID:{
            type: Number,
            required: [true,'El ID de la reservacion es obligatiro'],
            unique: true
        },
        CLIENTE_ID:{
            type: mongoose.Types.ObjectId,ref: "Clientes"
        },
        SERVICIO_ID:{
            type: mongoose.Types.ObjectId,ref: "Servicios"
        },
        ESTABLECIMIENTO_ID:{
            type: mongoose.Types.ObjectId,ref: "Establecimientos"
        },
        RESERVACION_PRECIO:{
            type: Number,
            required: true
        },
        RESERVACION_FECHA : {
            type: Date,
            required: true
        },
        RESERVACION_HORA : {
            type: String,
            required: true
        },
        CARRO_PLACA:{
            type: mongoose.Types.ObjectId,ref: "Carros"
        },
        Estado: {
            type : Boolean,
            required: true,
            default: true,
        }
    });





    // let x, y, z;
    // x= "3";
    // y="Hola";
    // z="buenos días";

    const estab1 = new Establecimientos ({
        
        ESTABLECIMIENTO_ID:"6",
    
        ESTABLECIMIENTO_NOMBRE:"Hola",
    
        ESTABLECIMIENTO_DESCRIPCION:"buenos díazzzzz"
    
    });
    
    
    const guardadoGrup = await estab1.save();
    
    console.log("Fin");

//En este caso es necesaro guardar el grup para que se puega generar el Id grup 


})();


    // const Establecimiento = Schema({
    //     ESTABLECIMIENTO_ID:{
    //         type: Number,
    //         required: [true,'El ID del establecimiento es obligatiro'],
    //         unique: true
    //     },
    
    //     ESTABLECIMIENTO_NOMBRE:{
    //         type: String,
    //         required: true
    //     },
    //     ESTABLECIMIENTO_DESCRIPCION:{
    //         type: String
    //     }
    
    // });
    
    // const Espacios = Schema({
    //     ESPACIO_ID:{
    //         type: Number,
    //         required: [true,'El ID del espacio es obligatiro'],
    //         unique: true
    //     },
    
    //     ESPACIO_ESTADO:{
    //         type: String,
    //         required: true
    //     }
    
    // });
    
    // const Servicios = Schema({
    //     SERVICIO_ID:{
    //         type: Number,
    //         required: [true,'El ID del servicio es obligatiro'],
    //         unique: true
    //     },
    
    //     SERVICIO_NOMBRE:{
    //         type: String,
    //         required: true
    //     },
    //     SERVICIO_PRECIO:{
    //         type: Number
    //     },
    //     SERVICIO_TIEMPO:{
    //         type: String
    //     },
    //     ESTABLECIMIENTO_NOMBRE: { 
    //         type: mongoose.Types.ObjectId,ref:"Establecimiento"
    //     }
    // });
    
    // const Trabajadores = Schema({
    //     TRABAJADOR_ID:{
    //         type: String,
    //         required: [true,'El ID del trabajador es obligatiro'],
    //         unique: true
    //     },
    //     TRABAJADOR_NOMBRE:{
    //         type: String,
    //         required: true
    //     },
    //     TRABAJADOR_APELLIDO:{
    //         type: String
    //     },
    //     TRABAJADOR_CEDULA:{
    //         type: String,
    //         required: true,
    //         unique: true
    //     },
    //     TRABAJADOR_TELEFONO:{
    //         type: Number,
    //         required: true
    //     },
    //     TRABAJADOR_CARGO:{
    //         type: String,
    //         required: true
    //     }
    // });

    // const Clientes = Schema({
    //     CLIENTE_ID:{
    //         type: Number,
    //         required: [true,'El ID del cliente es obligatiro'],
    //         unique: true
    //     },
    //     CLIENTE_NOMBRE:{
    //         type: String,
    //         required: true
    //     },
    //     CLIENTE_CEDULA:{
    //         type: String,
    //         required: true
    //     },
    //     CLIENTE_TELEFONO:{
    //         type: String,
    //         required: true
    //     }
    
    // });

    // const Carros = Schema({
    //     CARRO_PLACA:{
    //         type: String,
    //         required: [true,'La placa del vehiculo es obligatiro'],
    //         unique: true
    //     },
    //     CARRO_MODELO:{
    //         type: String,
    //         required: true
    //     },
    //     CARRO_AÑO:{
    //         type: Number,
    //         required: true
    //     },
    //     CARRO_COMENTARIO:{
    //         type: String,
    //         required: true
    //     }
    
    // });

    // const Registro = Schema({
    //     REGISTRO_MANTENIMIENTO:{
    //         type: String,
    //         required: [true,'El registro del mantenimiento es obligatiro'],
    //         unique: true
    //     },
    //     REGISTRO_FECHA:{
    //         type: Date,
    //         required: true
    //     },
    //     REGISTRO_KILOMETRAJE:{
    //         type: Number,
    //         required: true
    //     },
    //     CARRO_PLACA : {
    //         type: mongoose.Types.ObjectId,ref: "Carros"
    //     }
    
    // });

    // const Reservacion = Schema({
    //     RESERVACION_ID:{
    //         type: Number,
    //         required: [true,'El ID de la reservacion es obligatiro'],
    //         unique: true
    //     },
    //     CLIENTE_ID:{
    //         type: mongoose.Types.ObjectId,ref: "Clientes"
    //     },
    //     SERVICIO_ID:{
    //         type: mongoose.Types.ObjectId,ref: "Servicios"
    //     },
    //     ESTABLECIMIENTO_ID:{
    //         type: mongoose.Types.ObjectId,ref: "Establecimientos"
    //     },
    //     RESERVACION_PRECIO:{
    //         type: Number,
    //         required: true
    //     },
    //     RESERVACION_FECHA : {
    //         type: Date,
    //         required: true
    //     },
    //     RESERVACION_HORA : {
    //         type: String,
    //         required: true
    //     },
    //     CARRO_PLACA:{
    //         type: mongoose.Types.ObjectId,ref: "Carros"
    //     },
    // });
    
    // module.exports = model(Establecimiento, Espacios, Servicios, Trabajadores, Clientes, Carros, Registro, Reservacion); 


