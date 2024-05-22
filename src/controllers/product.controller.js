function createProduct (request, response){
    response.json({msg: 'Crea un Producto nuevo'})
}

function getProducts (request, response ){      
    response.json({
        msg: 'Obtiene todos los productos'
    })
}
function getProductById (){

}

function updateProductById (request, response){
    response.json({
        msg: 'Actualizar un Producto por su ID'
    })
}

function deleteProductById (request, response){
    response.json({
        msg: 'Eliminar un Producto por su ID'
    })
} 

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}