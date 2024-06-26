const { Router } = require( 'express' );
const { insertNewCamping, getCamping, getCampingById, removeCampingById, updateOneCampingById } = require('../controllers/camping.controller');
const router = Router();


router.post('/', insertNewCamping)
router.get('/', getCamping)
router.get('/:id',getCampingById)
router.delete('/:id',removeCampingById)
router.patch('/:id', updateOneCampingById)

module.exports = router;