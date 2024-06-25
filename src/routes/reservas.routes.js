const { Router }  = require ('express');
const { crearReserva, obtenerReservas, eliminarReserva, actualizarReserva, obtenerReservaPorId } = require('../controllers/reservas.controller');
const router = Router();

router.post('/', crearReserva)
router.get('/', obtenerReservas)
router.get('/:cedula', obtenerReservaPorId)
router.patch('/:cedula', actualizarReserva)
router.delete('/:cedula', eliminarReserva)

module.exports = router;