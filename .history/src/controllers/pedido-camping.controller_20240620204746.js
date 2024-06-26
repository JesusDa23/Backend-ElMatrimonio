const { req, res} = require('express');
const { insertCamping, getAllCamping, getOneCamping, removeOneCamping, updateOneCamping } = require('../services/camping.services');
const insertNewCamping = async (req, res) => {
    const camping = req.body;
    try{
        const newCamping = await insertCamping(camping)
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
const getCamping= async (req, res)=>{
    
    try {
        const data = await getAllCamping()
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
const getCampingById = async (req, res) => {
    const id = req.params.id
    try{
        const data = await getOneCamping(id)
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
const removeCampingById = async(req, res) => {
    const id = req.params.id
    try{
        const data = removeOneCamping(id)
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
const updateOneCampingById = async (req, res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await updateOneCamping(id, newData)
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
    insertNewCamping,
    getCamping,
    getCampingById,
    removeCampingById,
    updateOneCampingById

}