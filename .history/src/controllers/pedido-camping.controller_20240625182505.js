const { req, res} = require('express');
const { insertPedidoCamping, getAllPedidoCamping, getOnePedidoCamping, removeOnePedidoCamping, updateOnePedidoCamping } = require('../services/camping.services');
const insertNewPedidoCamping = async (req, res) => {
    const Pedidocamping = req.body;
    try{
        const newCamping = await insertPedidoCamping(Pedidocamping)
        res.json({
            ok: true,
            msg:'Se creo el camping exitosamente',
            data : newCamping,
        });
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al crear el camping'
        })
    }
}
const getPedidoCamping= async (req, res)=>{
    
    try {
        const data = await getAllPedidoCamping()
                res.json({
                    ok:true,
                    data,
                    msg: 'Muestra todos los camping exitosamente'
        })
    }
    catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Se registro un error al mostrar todos los camping'
        })
    }



}
const getPedidoCampingById = async (req, res) => {
    const id = req.params.id
    try{
        const data = await getOnePedidoCamping(id)
        res.json({
            ok:true,
            data,
            msg: 'Se obtuvo el camping correctamente con el ID'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al buscar el camping por su ID'
        })
    }
}
const removePedidoCampingById = async(req, res) => {
    const id = req.params.id
    try{
        const data = removeOnePedidoCamping(id)
        res.json({
            ok:true,
            data,
            msg: 'Se borro correctamente el camping'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:true,
            msg: 'Ocurrio un error al borrar la el camping'
        })

    }
}
const updateOnePedidoCampingById = async (req, res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await updateOnePedidoCamping(id, newData)
        res.json({
            ok:true,
            data: dataActualizada,
            msg: 'Se actualizo correctamente el camping'
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:' Ocurrio un error al actualizar el camping'
        })
    }
}
module.exports={
    insertNewPedidoCamping,
    getPedidoCamping,
    getPedidoCampingById,
    removePedidoCampingById,
    updateOnePedidoCampingById

}