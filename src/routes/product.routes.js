const { Router } = require( 'express' );
const { createProduct, getProducts, deleteProductById, updateProductById } = require('../controllers/product.controller');
const router = Router();

// definir las rutas para la entidad 'product'
// htpps://localhost:3000/api/products/

// C: Create
router.post('/', createProduct)

// R: Read 
router.get( "/", getProducts);

// U: Update htpps://localhost:3000/api/products/<espera.por-ID
router.put ( '/:id', updateProductById)

// U: Update htpps://localhost:3000/api/products/<espera.por-ID
// router.patch( '/:id', function (request, response){
//     response.json({
//         msg: 'Actualizar un Producto por su ID'
//     })
// })

// D:delete htpps://localhost:3000/api/products/<espera.por-ID
router.delete( '/:id', deleteProductById)

module.exports = router;      //exportar todas las rutas definidas para que queden disponibles en toda la aplicación 


