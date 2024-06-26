const PedidoCampingModel = require("../models/PedidoCamping")

const insertCamping = async (newPedidoCamping) => {         // Crea un servicio
    return await PedidoCampingModel.create({newPedidoCamping})
}

const getAllCamping = async()=>{                     // optiene  todos los servicios
    return await PedidoCampingModel.find()
}

const getOneCamping = async(cedulaCamping)=>{            //  optiene un servicio 
    return await PedidoCampingModel.findOne({_cedula:cedulaCamping})
}
const removeOneCamping = async(_id)=>{                  // Remueve un servicio
    return await PedidoCampingModel.findOneAndDelete({_id})
}
const updateOneCamping = async(_id, newData)=>{
    return await CampingModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports={
    insertCamping,
    getAllCamping,
    getOneCamping,
    removeOneCamping,
    updateOneCamping 
}
