const { Router } = require( 'express' );
const { createProduct } = require('../controllers/product.controller');
const router = Router();

router.post('/', createProduct )
// definir las rutas para la entidad 'product'
// htpps://localhost:3000/api/products/


module.exports = router;      //exportar todas las rutas definidas para que queden disponibles en toda la aplicación 

