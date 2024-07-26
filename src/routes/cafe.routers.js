const { Router } = require( 'express' );
const { insertNewCafe, getCafe, getCafeById, removeCafeById, updateOneCafeById } = require('../controllers/cafe.controller');
const router = Router();

router.post('/cafe',insertNewCafe)
router.get('/cafe',getCafe)
router.get('/cafe/:id',getCafeById)
router.delete('/cafe/:id',removeCafeById)
router.patch('/cafe/:id',updateOneCafeById)

module.exports = router;