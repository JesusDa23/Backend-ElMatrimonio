const {req,res} = require('express');
const { getMenu, createMenu, getMenuById, removeMenu, updateMenu } = require('../services/menu.services');

const getOneMenu = async (req, res) => {
    try{
        const data = await getMenu()
        res.json({
            ok:true,
            data,
            msg: 'Muestra el menu exitosamente'
        })
    }
    catch(error){
        console.error(error)
        res.json({
            ok: false,
            msg: 'error al obtener el menu'
        })
    }
}

const getOneMenuById = async (req,res) => {
    const id = req.params.id
    try{
        const data = await getMenuById(id)
        res.json({
            ok:true,
            data,
            msg: 'Se obtuvo el menu correctamente con el ID'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al buscar el menu por su ID'
        })
    }
}

const createOneMenu = async (req,res) => {
    const menu = req.body;
    try{
        const data = await createMenu(menu)
        res.json({
            ok: true,
            data,
            msg:'Se creo el menu exitosamente'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al crear el menu'
        })
    }
}

const removeOneMenuById = async (req,res) => {
    const id = req.params.id
    try{
        const data = removeMenu(id)
        res.json({
            ok:true,
            data,
            msg: 'Se borro correctamente el menu'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:true,
            msg: 'Ocurrio un error al borrar el menu'
        })

    }
}
const updateMenuOneById = async (req,res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await updateMenu(id, newData)
        res.json({
            ok:true,
            data: dataActualizada,
            msg: 'Se actualizo correctamente el menu'
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:' Ocurrio un error al actualizar el menu'
        })
    }
}
module.exports = {
    getOneMenu,
    getOneMenuById,
    createOneMenu,
    removeOneMenuById,
    updateMenuOneById
}