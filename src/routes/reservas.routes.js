const { Router }  = require ('express');
const { crearReserva, obtenerReservas, eliminarReserva, actualizarReserva, obtenerReservaPorId } = require('../controllers/reservas.controller');
const router = Router();

router.post('/reservas', crearReserva)
router.get('/reservas', obtenerReservas)
router.get('/reservas/:cedula', obtenerReservaPorId)
router.patch('/reservas/:cedula', actualizarReserva)
router.delete('/reservas/:cedula', eliminarReserva)

module.exports = router;