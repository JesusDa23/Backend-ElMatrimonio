const { Router } = require( 'express' );
const { insertNewPedidoCafe, getPedidoCafe, getPedidoCafeById, removePedidoCafeById, updateOnePedidoCafeById } = require('../controllers/pedido-cafe.controller');
// controlador
const router = Router();

router.post('/',insertNewPedidoCafe)
router.get('/',getPedidoCafe)
router.get('/:cedula',getPedidoCafeById)
router.delete('/:cedula',removePedidoCafeById)
router.patch('/:cedula',updateOnePedidoCafeById)

module.exports = router;