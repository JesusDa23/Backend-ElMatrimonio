const { Router } = require( 'express' );
const { insertNewCamping, getCamping, getCampingById, removeCampingById, updateOneCampingById } = require('../controllers/camping.controller');
const router = Router();


router.post('/', insertNewCamping)
router.get('/', getCamping)
router.get('/:cedula',getCampingById)
router.delete('/:cedula',removeCampingById)
router.patch('/:cedula', updateOneCampingById)

module.exports = router;