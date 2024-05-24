const { request, response } = require("express");
const { InsertProduct } = require("../services/product.service");

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

module.exports = {
    createProduct
}