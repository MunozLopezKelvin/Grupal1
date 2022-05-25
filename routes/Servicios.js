const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerServicio, 
        obtenerServicios,
        crearServicio,
        actualizarServicio,
        borrarServicio      
} = require('../controllers').Servicio;

const router = Router();

router.get('/' , obtenerServicios)
router.post('/:SERVICIO_NOMBRE', obtenerServicio)
router.post('/', [check('SERVICIO_NOMBRE', 'El nombre es obligatorio').not().isEmpty()], crearServicio)
router.put('/:SERVICIO_ID', actualizarServicio)
router.delete('/:SERVICIO_ID', borrarServicio)

module.exports = router;