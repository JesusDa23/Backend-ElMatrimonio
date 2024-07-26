const { Router } = require( 'express' );
const { insertNewPedidoCamping, getPedidoCamping, getPedidoCampingById, removePedidoCampingById, updateOnePedidoCampingById } = require('../controllers/pedido-camping.controller');

const router = Router();

router.post('/pedidocamping', insertNewPedidoCamping)
router.get('/pedidocamping', getPedidoCamping)
router.get('/pedidocamping/:cedula',getPedidoCampingById)
router.delete('/pedidocamping/:cedula',removePedidoCampingById)
router.patch('/pedidocamping/:cedula', updateOnePedidoCampingById)

module.exports = router;