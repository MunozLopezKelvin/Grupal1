/* Manuel */
const { Router } = require('express');
const { check } = require('express-validator');
const {
    obtenerCliente,
    obtenerClientes,
    crearCliente,
    actualizarCliente,
    borrarCliente,

} = require('../controllers').Cliente;


const router = Router();

router.get('/' , obtenerClientes)
router.post('/:BUSCAR_CLIENTE', obtenerCliente)
router.post('/', [check('CLIENTE_NOMBRE', 'La Nombre es obligatorio').not().isEmpty()], crearCliente)
router.put('/:CLIENTE_NOMBRE', actualizarCliente)
router.delete('/:CLIENTE_NOMBRE', borrarCliente)

module.exports = router;