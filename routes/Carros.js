//Paul
const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerCarro, 
        obtenerCarros,
        crearCarro,
        actualizarCarro,
        borrarCarro        
} = require('../controllers').Carro;



const router = Router();

router.get('/' , obtenerCarros)
router.get('/:CARRO_PLACA', obtenerCarro)
router.post('/', [check('CARRO_PLACA', 'La placa es obligatoria').not().isEmpty()], crearCarro)
router.put('/:CARRO_PLACA', actualizarCarro)
router.delete('/:CARRO_PLACA', borrarCarro)

module.exports = router;