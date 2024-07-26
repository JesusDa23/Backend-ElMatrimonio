const { Router }  = require ('express');
const { crearCliente, obtenerClientes, obtenerClientePorId, actualizarCliente, eliminarCliente } = require('../controllers/user.controller');

const router = Router();

router.post('/cliente', crearCliente)
router.get('/cliente', obtenerClientes)
router.get('/cliente/:cedula', obtenerClientePorId)
router.patch('/cliente/:cedula', actualizarCliente)
router.delete('/cliente/:cedula', eliminarCliente)

module.exports = router;