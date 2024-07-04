const { req, res} = require('express');
const { insertPedidoCafe, getAllPedidocafes, getOnePedidoCafe, removeOnePedidoCafe, updateOnePedidoCafe } = require('../services/pedido-cafe.services');
// servicios

const insertNewPedidoCafe = async (req, res) => {
    const cafe = req.body;
    try{
        const newCafe = await insertPedidoCafe(cafe)
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

const getPedidoCafe = async (req, res)=>{
    
    try {
        const data = await getAllPedidocafes()
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

const getPedidoCafeById  = async (req, res) => {
    const cedula = req.params.cedula
    try{
        const data = await getOnePedidoCafe(cedula)
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

const removePedidoCafeById  = async(req, res) => {
    const cedula = req.params.cedula
    try{
        const data = removeOnePedidoCafe(cedula)
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

const updateOnePedidoCafeById  = async (req, res) => {
    const cedula = req.params.cedula
    const newData = req.body
    try{
        const dataActualizada =await updateOnePedidoCafe(cedula, newData)
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
    insertNewPedidoCafe,
    getPedidoCafe,
    getPedidoCafeById,
    removePedidoCafeById,
    updateOnePedidoCafeById,
}