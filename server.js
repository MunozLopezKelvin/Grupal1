const express = require('express');
const cors = require ('cors');
const { dbConnection } = require('./database/config');

class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port= process.env.PORT;
        this.paths= {
            carros:'/api/carros',
            clientes:'/api/clientes',
            espacios:'/api/espacios',
            establecimientos:'/api/establecimientos',
            reservas:'/api/reservas',
            servicios:'/api/servicios',
            trabajadores:'/api/trabajadores'
        }
        this.conectarBD();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoa', this.app);
        this._express= express().use(this.router)
    }
    async conectarBD(){
        await dbConnection();
    }
    middlewares (){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.carros,require('./routes/Carros'))
        this.app.use(this.paths.clientes,require('./routes/Clientes'))
        this.app.use(this.paths.espacios,require('./routes/Espacios'))
        this.app.use(this.paths.establecimientos,require('./routes/Establecimientos'))
        this.app.use(this.paths.reservas,require('./routes/Reservas'))
        this.app.use(this.paths.servicios,require('./routes/Servicios'))
        this.app.use(this.paths.trabajadores,require('./routes/Trabajadores'))
    }
    listen(){
        this._express.listen(this.port,()=>{
            //console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}

module.exports = Server;