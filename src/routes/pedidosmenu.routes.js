const {Router} = require('express')
const { obtenerPedidos, crearPedido, eliminarPedido, actualizarPedido, obtenerPedidosPorId } = require('../controllers/pedidosmenu.controller')
const router = Router()


router.get('/' , obtenerPedidos)
router.get('/:cedula' , obtenerPedidosPorId)
router.post('/',  crearPedido)
router.delete('/:cedula', eliminarPedido)
router.patch('/:cedula', actualizarPedido)

module.exports = router