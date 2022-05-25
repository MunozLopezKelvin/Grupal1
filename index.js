// require('dotenv').config()
// const Server = require('./server');
// const server = new Server();
// server.listen();

const Colecciones = require('./modelos/colecciones');
const readLine = require('readline');
const { exit } = require('process');
const { restart } = require('nodemon');
let num, num1;

let intcap = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

(function menuprincipal () {
        console.log("\n~~~~~ Menú de opciones ~~~~~");
        console.log("Elija la tarea a realiza");
        console.log("1. Registrar");
        console.log("2. Modificar");
        console.log("3. Eliminar");
        console.log("4. Visualizar");
        console.log("5. Salir\n");
        intcap.question('Ingrese un número de opción\n', function(resp){
            num = resp.toString().trim();
            if (num==1){
                function registro(){
                console.log("\n~~~~~ Menú de registro ~~~~~");
                console.log("1. Registrar un establecimiento.")
                console.log("2. Registrar un espacio.")
                console.log("3. Registrar un servicio.")
                console.log("4. Registrar un trabajador.")
                console.log("5. Registrar un carro.")
                console.log("6. Registrar un registro.")
                console.log("7. Registrar una reservación.")
                console.log("8. Volver al menú principal.");
                intcap.question('Ingrese un número de opción\n', function(resp1){
                    num1 = resp1.toString().trim();
                    if(num1==1){
                        
                        console.log("Se ha registrado el establecimiento correctamente")
                        registro();
                    }
                    else if(num1==2){
                        console.log("Se ha registrado el espacio correctamente") 
                        registro();
                    }
                    else if(num1==3){
                        console.log("Se ha registrado el servicio correctamente") 
                        registro();
                    }
                    else if(num1==4){
                        console.log("Se ha registrado el trabajador correctamente") 
                        registro();
                    }
                    else if(num1==5){
                        console.log("Se ha registrado el carro correctamente") 
                        registro();
                    }
                    else if(num1==6){
                        console.log("Se ha registrado el registro correctamente") 
                        registro();
                    }
                    else if(num1==7){
                        console.log("Se ha registrado el reservación correctamente") 
                        registro();
                    }
                    else if(num1==8){
                        console.log("Volviendo al menú principal...") 
                        menuprincipal();
                    }
                });
                }
                registro();
            }
            
            if (num==2){
                function modificar(){
                console.log("\n~~~~~ Menú de registro ~~~~~");
                console.log("1. Modificar un establecimiento.")
                console.log("2. Modificar un espacio.")
                console.log("3. Modificar un servicio.")
                console.log("4. Modificar un trabajador.")
                console.log("5. Modificar un carro.")
                console.log("6. Modificar un registro.")
                console.log("7. Modificar una reservación.")
                console.log("8. Volver al menú principal.");
                intcap.question('Ingrese un número de opción\n', function(resp1){
                    num1 = resp1.toString().trim();
                    if(num1==1){
                        console.log("Se ha modificado el establecimiento correctamente")
                        modificar();
                    }
                    else if(num1==2){
                        console.log("Se ha modificado el espacio correctamente") 
                        modificar();
                    }
                    else if(num1==3){
                        console.log("Se ha modificado el servicio correctamente") 
                        modificar();
                    }
                    else if(num1==4){
                        console.log("Se ha modificado el trabajador correctamente") 
                        modificar();
                    }
                    else if(num1==5){
                        console.log("Se ha modificado el carro correctamente") 
                        modificar();
                    }
                    else if(num1==6){
                        console.log("Se ha modificado el registro correctamente") 
                        modificar();
                    }
                    else if(num1==7){
                        console.log("Se ha modificado el reservación correctamente") 
                        modificar();
                    }
                    else if(num1==8){
                        console.log("Volviendo al menú principal...") 
                        menuprincipal();
                    }
                });
                }
                modificar();
            }

            if (num==3){
                function eliminar(){
                console.log("\n~~~~~ Menú de registro ~~~~~");
                console.log("1. Eliminar un establecimiento.")
                console.log("2. Eliminar un espacio.")
                console.log("3. Eliminar un servicio.")
                console.log("4. Eliminar un trabajador.")
                console.log("5. Eliminar un carro.")
                console.log("6. Eliminar un registro.")
                console.log("7. Eliminar una reservación.")
                console.log("8. Volver al menú principal.");
                intcap.question('Ingrese un número de opción\n', function(resp1){
                    num1 = resp1.toString().trim();
                    if(num1==1){
                        console.log("Se ha eliminado el establecimiento correctamente")
                        eliminar();
                    }
                    else if(num1==2){
                        console.log("Se ha eliminado el espacio correctamente") 
                        eliminar();
                    }
                    else if(num1==3){
                        console.log("Se ha eliminado el servicio correctamente") 
                        eliminar();
                    }
                    else if(num1==4){
                        console.log("Se ha eliminado el trabajador correctamente") 
                        eliminar();
                    }
                    else if(num1==5){
                        console.log("Se ha eliminado el carro correctamente") 
                        eliminar();
                    }
                    else if(num1==6){
                        console.log("Se ha eliminado el registro correctamente") 
                        eliminar();
                    }
                    else if(num1==7){
                        console.log("Se ha eliminado el reservación correctamente") 
                        eliminar();
                    }
                    else if(num1==8){
                        console.log("Volviendo al menú principal...") 
                        menuprincipal();
                    }
                });
                }
                eliminar();
            }

            if (num==4){
                function visualizar(){
                console.log("\n~~~~~ Menú de registro ~~~~~");
                console.log("1. Visualizar un establecimiento.")
                console.log("2. Visualizar un espacio.")
                console.log("3. Visualizar un servicio.")
                console.log("4. Visualizar un trabajador.")
                console.log("5. Visualizar un carro.")
                console.log("6. Visualizar un registro.")
                console.log("7. Visualizar una reservación.")
                console.log("8. Volver al menú principal.");
                intcap.question('Ingrese un número de opción\n', function(resp1){
                    num1 = resp1.toString().trim();
                    if(num1==1){
                        console.log("Se ha visualizado el establecimiento correctamente")
                        visualizar();
                    }
                    else if(num1==2){
                        console.log("Se ha visualizado el espacio correctamente") 
                        visualizar();
                    }
                    else if(num1==3){
                        console.log("Se ha visualizado el servicio correctamente") 
                        visualizar();
                    }
                    else if(num1==4){
                        console.log("Se ha visualizado el trabajador correctamente") 
                        visualizar();
                    }
                    else if(num1==5){
                        console.log("Se ha visualizado el carro correctamente") 
                        visualizar();
                    }
                    else if(num1==6){
                        console.log("Se ha visualizado el registro correctamente") 
                        visualizar();
                    }
                    else if(num1==7){
                        console.log("Se ha visualizado el reservación correctamente") 
                        visualizar();
                    }
                    else if(num1==8){
                        console.log("Volviendo al menú principal...") 
                        menuprincipal();
                    }
                });
                }
                visualizar();
            }

            if (num==5){
                console.log("El programa se está finalizando...");
                exit();
            }
        });
    
})();

