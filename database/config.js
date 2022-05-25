const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('BD conectada');
    }catch(error){
        console.log('No se pudo conectar la BD');
        throw new Error('Error al conectarse a la BD');
    }
}

module.exports={
    dbConnection
}