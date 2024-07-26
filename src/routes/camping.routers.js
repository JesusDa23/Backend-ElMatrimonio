const { Router } = require( 'express' );
const { insertNewCamping, getCamping, getCampingById, removeCampingById, updateOneCampingById } = require('../controllers/camping.controller');
const router = Router();


router.post('/camping', insertNewCamping)
router.get('/camping', getCamping)
router.get('/camping/:id',getCampingById)
router.delete('/camping/:id',removeCampingById)
router.patch('/camping/:id', updateOneCampingById)

module.exports = router;