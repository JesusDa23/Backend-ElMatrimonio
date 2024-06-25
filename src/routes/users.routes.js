const { Router }  = require ('express');
const { crearCliente, obtenerClientes, obtenerClientePorId, actualizarCliente, eliminarCliente } = require('../controllers/user.controller');

const router = Router();

router.post('/', crearCliente)
router.get('/', obtenerClientes)
router.get('/:cedula', obtenerClientePorId)
router.patch('/:cedula', actualizarCliente)
router.delete('/:cedula', eliminarCliente)

module.exports = router;