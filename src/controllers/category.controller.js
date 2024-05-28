const {request, response } = require('express');
const { getAllCategories, createOneNewCategory, getOneCategoriesById, removeOneCategoriaPorId, updateOneCategoryById } = require('../services/category.service');

getCategories = async (req, res) => {
    try {
        const data = await getAllCategories()
        res.json({
            ok:true,
            data,
            msg: 'Muestra todas las categorias exitosamente'
        })
    }
    catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Se registro un error al mostrar todas las categorias'
        })
    }
}

getCategoriesById = async (req, res) => {
    const id = req.params.id
    try{
        const data = await getOneCategoriesById(id)
        res.json({
            ok:true,
            data,
            msg: 'Se obtuvo la categoria correctamente con el ID'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al buscar la categoria por su ID'
        })
    }
}

createNewCategory = async (req, res) => {
    const category = req.body;
    try{
        const data = await createOneNewCategory(category)
        res.json({
            ok: true,
            msg:'Se creo la Categoria exitosamente'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al crear la categoria'
        })
    }
}

removeCategoriaPorId = async(req, res) => {
    const id = req.params.id
    try{
        const data = removeOneCategoriaPorId(id)
        res.json({
            ok:true,
            msg: 'Se borro correctamente la categoria'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:true,
            msg: 'Ocurrio un error al borrar la categoria'
        })

    }
}

updateCategoryById = async (req, res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await updateOneCategoryById(id, newData)
        res.json({
            ok:true,
            data: dataActualizada,
            msg: 'Se actualizo correctamente la categoria'
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:' Ocurrio un error al actualizar la categoria'
        })
    }
}

module.exports = {
    getCategories,
    getCategoriesById,
    createNewCategory,
    removeCategoriaPorId,
    updateCategoryById
    
}