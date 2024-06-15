const {Router} = require('express')
const { obtenerPedidos, crearPedido, eliminarPedido, actualizarPedido } = require('../controllers/pedidosmenu.controller')
const router = Router()


router.get('/' , obtenerPedidos)
router.post('/',  crearPedido)
router.delete('/:id', eliminarPedido)
router.patch('/:id', actualizarPedido)

module.exports = router