//hecho por Jesús
const { Router } = require('express');

const router = Router();

const { check } = require('express-validator');
const {
    obtenerEspacio,
    obtenerEspacios,
    crearEspacio,
    actualizarEspacio,
    borrarEspacio
} = require('../controllers').Espacio;



router.get('/' , obtenerEspacios)
router.post('/:ESPACIO_ID', obtenerEspacio)
router.post('/', crearEspacio)
router.put('/:ESPACIO_ID',  actualizarEspacio)
router.delete('/:ESPACIO_ID', borrarEspacio)

module.exports = router;