const { Router }  = require ('express');
const { crearReserva, obtenerReservas, eliminarReserva, actualizarReserva, obtenerReservaPorId } = require('../controllers/reservas.controller');
const router = Router();

router.post('/', crearReserva)
router.get('/', obtenerReservas)
router.get('/:id', obtenerReservaPorId)
router.patch('/:id', actualizarReserva)
router.delete('/:id', eliminarReserva)

module.exports = router;