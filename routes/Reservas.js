/* Manuel */
const { Router } = require('express');
const { check } = require('express-validator');
const {
    obtenerReservas,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    borrarReserva,

} = require('../controllers').Reserva;



const router = Router();

router.get('/' , obtenerReservas)
router.get('/:RESERVACION_ID', obtenerReserva)
router.post('/', [check('RESERVACION_ID', 'La Nombre es obligatorio').not().isEmpty()], crearReserva)
router.put('/:RESERVACION_ID', actualizarReserva)
router.delete('/:RESERVACION_ID', borrarReserva)

module.exports = router;