const { Router } = require( 'express' );
const { insertNewPedidoCamping, getPedidoCamping, getPedidoCampingById, removePedidoCampingById, updateOnePedidoCampingById } = require('../controllers/pedido-camping.controller');

const router = Router();

router.post('/', insertNewPedidoCamping)
router.get('/', getPedidoCamping)
router.get('/:cedula',getPedidoCampingById)
router.delete('/:cedula',removePedidoCampingById)
router.patch('/:cedula', updateOnePedidoCampingById)

module.exports = router;