const CategoryModel = require('../models/Category');

async function getAllCategories(){
    return await CategoryModel.find()
}

async function getOneCategoriesById(idProducto){
    return await CategoryModel.findOne({_id:idProducto})
}

async function createOneNewCategory(newCategory){
    return await CategoryModel.create(newCategory)
}

async function removeOneCategoriaPorId(_id){
    return await CategoryModel.findOneAndDelete({_id})
}

async function updateOneCategoryById(_id, newData){
    return await CategoryModel.findOneAndUpdate({_id}, newData, {new: true} 
    )
}

module.exports = {
    getAllCategories,
    getOneCategoriesById,
    createOneNewCategory,
    removeOneCategoriaPorId,
    updateOneCategoryById
}