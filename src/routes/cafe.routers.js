const { Router } = require( 'express' );
const { insertNewCafe, getCafe, getCafeById, removeCafeById, updateOneCafeById } = require('../controllers/cafe.controller');
const router = Router();

router.post('/',insertNewCafe)
router.get('/',getCafe)
router.get('/:id',getCafeById)
router.delete('/:id',removeCafeById)
router.patch('/:id',updateOneCafeById)

module.exports = router;