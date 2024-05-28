const { request, response } = require("express");
const { InsertProduct, obtenerProductos, obtenerProductoPorUnId, eliminarProductoPorUnId, actualizarUnProductoCompleto } = require("../services/product.service");

async function createProduct( req, res ){
    const product = req.body;
    try {
        const newProduct = await InsertProduct(product);
        res.json({
            ok:true,
            data: newProduct
        });

    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'NO se pudo insertar el producto'
        })
    }
}

async function obtenerTodosProductos(req, res){
    try {
        const data = await obtenerProductos();
        res.json({
            ok: true,
            data
        })
    }
    catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:'Error al obtener todos los productos'
        })
    }
}

async function obtenerProductoPorId (req, res){
    const id = req.params.id;   //Captura el Id del producto que viene con la URL
    // res.json({id});

    try{
        const data = await obtenerProductoPorUnId(id)
        res.json({
            ok:true,
            data
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:('Error al obtener un prducto por su ID')
        })
    }
}

async function eliminarProductoPorId(req, res){
    const id = req.params.id
    try {
        const data = await eliminarProductoPorUnId(id)
        res.json({
            ok:true,
            data,
            msg:('Se borro exitosamente')
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:('Error al eliminar el producto')
        })
    }
}


async function actualizarProductoCompleto(req,res){
    const id = req.params.id;               // Consulta ID de la url
    const newData = req.body;              //capturo datos para actualizar

    try {
        const productoActualizado = await actualizarUnProductoCompleto(id, newData) 
        res.json({
            ok:true,
            data: productoActualizado,
            msg:('Se actualizo correctamente')
        })
    }
    catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:('Error al actualizar todos los valores del producto')
        })
    }
}

// function actualizarUnaPropiedadDelProducto()

module.exports = {
    createProduct,
    obtenerTodosProductos,
    obtenerProductoPorId,
    eliminarProductoPorId,
    actualizarProductoCompleto
}