const { req, res} = require('express');
const { insertCafe, getAllcafes, getOneCafe, removeOneCafe, updateOneCafe } = require('../services/cafe.services');

const insertNewCafe = async (req, res) => {
    const cafe = req.body;
    try{
        const newCafe = await insertCafe (cafe)
        res.json({
            ok: true,
            msg:'Se creo el café exitosamente',
            newCafe
        });
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al crear el cafe',
        })
    }
}

const getCafe = async (req, res)=>{
    
    try {
        const data = await getAllcafes()
        res.json({
            ok:true,
            data, 
            msg : 'Muestra todos los cafés exitosamente'
        })
    }
    catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al mostrar todos los cafés'
        })
    }
}

const getCafeById  = async (req, res) => {
    const id = req.params.id
    try{
        const data = await getOneCafe(id)
        res.json({
            ok:true,
            data,
            msg: 'Se obtuvo el café correctamente con el ID'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al buscar el café por su ID'
        })
    }
}

const removeCafeById  = async(req, res) => {
    const id = req.params.id
    try{
        const data = removeOneCafe(id)
        res.json({
            ok:true,
            data,
            msg: 'Se borro correctamente el café'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:true,
            msg: 'Ocurrio un error al borrar la el café'
        })
    }
}

const updateOneCafeById  = async (req, res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await updateOneCafe(id, newData)
        res.json({
            ok:true,
            data: dataActualizada,
            msg: 'Se actualizo correctamente el Café'
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:' Ocurrio un error al actualizar el Café'
        })
    }
}
module.exports = {
    insertNewCafe,
    getCafe,
    getCafeById,
    removeCafeById,
    updateOneCafeById,
}