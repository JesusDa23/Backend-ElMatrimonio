const ProductModel = require("../models/Product")

async function InsertProduct(newProduct){
    return await ProductModel.create(newProduct)
}

async function obtenerProductos(){
    return await ProductModel.find();
}

async function obtenerProductoPorUnId(idProducto){
    return await ProductModel.find({_id: idProducto});
}

async function eliminarProductoPorUnId(idProducto){
    return await ProductModel.findOneAndDelete({_id: idProducto});
}

async function actualizarUnProductoCompleto( _id, dataActualizada){
    return await ProductModel.findOneAndUpdate({_id}, //objecto de consulta
        dataActualizada,                            //data que se va actualizar
        {new: true}                                 //nos Muestra el Producto actualizado y no el anterior en el postman
    )
}


module.exports = {
    InsertProduct,
    obtenerProductos,
    obtenerProductoPorUnId,
    eliminarProductoPorUnId,
    actualizarUnProductoCompleto
}