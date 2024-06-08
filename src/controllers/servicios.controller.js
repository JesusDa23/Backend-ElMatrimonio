const { req, res} = require('express');
const { getAllServices, insertService, getOneService, removeOneService, updateOneService } = require('../services/servicios.services');

insertNewService = async (req, res) => {
    const servicio = req.body;
    try{
        const newService = await insertService (servicio)
        res.json({
            ok: true,
            msg:'Se creo el servicio exitosamente',
            data : newService,
        });
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al crear el servcio'
        })
    }
}
getServices= async (req, res)=>{
    
    try {
        const data = await getAllServices()
                res.json({
                    ok:true,
                    data,
                    msg: 'Muestra todos los servicios exitosamente'
        })
    }
    catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Se registro un error al mostrar todos los servicios'
        })
    }



}
getServiceById = async (req, res) => {
    const id = req.params.id
    try{
        const data = await getOneService(id)
        res.json({
            ok:true,
            data,
            msg: 'Se obtuvo el servicio correctamente con el ID'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al buscar el servicio por su ID'
        })
    }
}
removeServiceById = async(req, res) => {
    const id = req.params.id
    try{
        const data = removeOneService(id)
        res.json({
            ok:true,
            data,
            msg: 'Se borro correctamente el servicio'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:true,
            msg: 'Ocurrio un error al borrar la el servicio'
        })

    }
}
updateOneServiceById = async (req, res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await updateOneService(id, newData)
        res.json({
            ok:true,
            data: dataActualizada,
            msg: 'Se actualizo correctamente el servicio'
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:' Ocurrio un error al actualizar el servicio'
        })
    }
}
module.exports={
    insertNewService,
    getServices,
    getServiceById,
    removeServiceById,
    updateOneServiceById

}