const { Router } = require( 'express' );
const { insertNewService, getServices, getServiceById, removeServiceById,updateOneServiceById } = require('../controllers/servicios.controller');
const router = Router();


router.post('/', insertNewService)
router.get('/', getServices)
router.get('/:id',getServiceById)
router.delete('/:id',removeServiceById)
router.patch('/:id', updateOneServiceById)

module.exports = router;