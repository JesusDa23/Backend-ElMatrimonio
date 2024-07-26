const { Router } = require( 'express' );
const { insertNewPedidoCafe, getPedidoCafe, getPedidoCafeById, removePedidoCafeById, updateOnePedidoCafeById } = require('../controllers/pedido-cafe.controller');
// controlador
const router = Router();

router.post('/pedidocafe',insertNewPedidoCafe)
router.get('/pedidocafe',getPedidoCafe)
router.get('/pedidocafe/:cedula',getPedidoCafeById)
router.delete('/pedidocafe/:cedula',removePedidoCafeById)
router.patch('/pedidocafe/:cedula',updateOnePedidoCafeById)

module.exports = router;