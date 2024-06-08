const ServicioModel = require("../models/Servicios")

const insertService = async (newService) => {         // Crea un servicio
    return await ServicioModel.create(newService)
}

const getAllServices = async()=>{                     // optiene  todos los servicios
    return await ServicioModel.find()
}

const getOneService = async(idServicio)=>{            //  optiene un servicio 
    return await ServicioModel.findOne({_id:idServicio})
}
const removeOneService = async(_id)=>{                  // Remueve un servicio
    return await ServicioModel.findOneAndDelete({_id})
}
const updateOneService = async(_id, newData)=>{
    return await ServicioModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports={
    insertService,
    getAllServices,
    getOneService,
    removeOneService,
    updateOneService 
}
