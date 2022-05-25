//Yudeh
const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerEstablecimiento, 
        obtenerEstablecimientos,
        crearEstablecimiento,
        actualizarEstablecimiento,
        borrarEstablecimiento        
} = require('../controllers').Establecimiento;

const router = Router();

router.get('/' , obtenerEstablecimientos)
router.post('/:ESTABLECIMIENTO_NOMBRE', obtenerEstablecimiento)
router.post('/', [check('ESTABLECIMIENTO_NOMBRE', 'El nombre es obligatorio').not().isEmpty()], crearEstablecimiento)
router.put('/:ESTABLECIMIENTO_NOMBRE', actualizarEstablecimiento)
router.delete('/:ESTABLECIMIENTO_NOMBRE', borrarEstablecimiento)

module.exports = router;