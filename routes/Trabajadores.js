//hecho por Jesús
const { Router } = require('express');
const { check } = require('express-validator');
const {
    obtenerTrabajador,
    obtenerTrabajadores,
    crearTrabajador,
    actualizarTrabajador,
    borrarTrabajador
} = require('../controllers').Trabajador;


const router = Router();

router.get('/' , obtenerTrabajadores)
router.get('/:TRABAJADOR_CEDULA', obtenerTrabajador)
router.post('/', [check('TRABAJADOR_CEDULA', 'El ingreso del id del espacio es obligatorio').not().isEmpty()], crearTrabajador)
router.put('/:TRABAJADOR_CEDULA',  actualizarTrabajador)
router.delete('/:TRABAJADOR_CEDULA', borrarTrabajador)

module.exports = router;