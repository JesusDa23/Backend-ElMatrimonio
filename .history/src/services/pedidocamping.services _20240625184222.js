const PedidoCampingModel = require("../models/PedidoCamping")

const insertPedidoCamping = async (newPedidoCamping) => {         // Crea un servicio
    return await PedidoCampingModel.create({newPedidoCamping})
}

const getAllPedidoCamping = async()=>{                     // optiene  todos los servicios
    return await PedidoCampingModel.find()
}

const getOnePedidoCamping = async(cedulaCamping)=>{            //  optiene un servicio 
    return await PedidoCampingModel.findOne({_cedula:cedulaCamping})
}
const removeOnePedidoCamping = async(_id)=>{                  // Remueve un servicio
    return await PedidoCampingModel.findOneAndDelete({_id})
}
const updateOnePedidoCamping = async(_id, newData)=>{
    return await PedidoCampingModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports={
    insertPedidoCamping,
    getAllPedidoCamping,
    getOnePedidoCamping,
    removeOnePedidoCamping,
    updateOnePedidoCamping 
}
