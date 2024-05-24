const ProductModel = require("../models/Product")

async function InsertProduct(newProduct){
    return await ProductModel.create(newProduct)
}


module.exports = {
    InsertProduct
}