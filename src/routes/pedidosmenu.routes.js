const {Router} = require('express')
const { obtenerPedidos, crearPedido, eliminarPedido, actualizarPedido, obtenerPedidosPorId } = require('../controllers/pedidosmenu.controller')
const router = Router()


router.get('/' , obtenerPedidos)
router.get('/:id' , obtenerPedidosPorId)
router.post('/',  crearPedido)
router.delete('/:id', eliminarPedido)
router.patch('/:id', actualizarPedido)

module.exports = router