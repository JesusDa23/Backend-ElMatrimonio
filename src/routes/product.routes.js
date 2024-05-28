const { Router } = require( 'express' );
const { createProduct, obtenerTodosProductos, obtenerProductoPorId, eliminarProductoPorId, actualizarProductoCompleto } = require('../controllers/product.controller');
const router = Router();

router.post('/', createProduct )   //hemos creado producto
// definir las rutas para la entidad 'product'
// htpps://localhost:3000/api/products/
router.get('/',obtenerTodosProductos ) //vamos obtener todos los productos
router.get('/:id', obtenerProductoPorId)
router.delete('/:id', eliminarProductoPorId)
router.put('/:id', actualizarProductoCompleto )

module.exports = router;      //exportar todas las rutas definidas para que queden disponibles en toda la aplicación 

