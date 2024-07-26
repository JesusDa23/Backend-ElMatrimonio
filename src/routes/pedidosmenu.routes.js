const {Router} = require('express')
const { obtenerPedidos, crearPedido, eliminarPedido, actualizarPedido, obtenerPedidosPorId } = require('../controllers/pedidosmenu.controller')
const router = Router()


router.get('/pedidos' , obtenerPedidos)
router.get('/pedidos/:cedula' , obtenerPedidosPorId)
router.post('/pedidos',  crearPedido)
router.delete('/pedidos/:cedula', eliminarPedido)
router.patch('/pedidos/:cedula', actualizarPedido)

module.exports = router