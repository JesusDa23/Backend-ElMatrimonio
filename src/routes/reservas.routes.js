const { Router }  = require ('express');
const { crearReserva, obtenerReservas, eliminarReserva, actualizarReserva } = require('../controllers/reservas.controller');
const { route } = require('./categories.routes');
const router = Router();

router.post('/', crearReserva)
router.get('/', obtenerReservas)
router.patch('/:id', actualizarReserva)
router.delete('/:id', eliminarReserva)

module.exports = router