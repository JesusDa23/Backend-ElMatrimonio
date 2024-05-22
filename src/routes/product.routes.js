const { Router } = require( 'express' );
const router = Router();

// definir las rutas para la entidad 'product'
// htpps://localhost:3000/api/products/

// C: Create
router.post('/', function (request, response){
    response.json({msg: 'Crea un Producto nuevo'})
})

// R: Read 
router.get( "/", function (request, response ){      
    response.json({
        msg: 'Obtiene todos los productos'
    })
});

// U: Update htpps://localhost:3000/api/products/<espera.por-ID
router.put ( '/:id', function (request, response){
    response.json({
        msg: 'Actualizar un Producto por su ID'
    })
})

// U: Update htpps://localhost:3000/api/products/<espera.por-ID
router.patch( '/:id', function (request, response){
    response.json({
        msg: 'Actualizar un Producto por su ID'
    })
})

// D:delete htpps://localhost:3000/api/products/<espera.por-ID
router.delete( '/:id', function (request, response){
    response.json({
        msg: 'Eliminar un Producto por su ID'
    })
} )

module.exports = router;      //exportar todas las rutas definidas para que queden disponibles en toda la aplicación 


