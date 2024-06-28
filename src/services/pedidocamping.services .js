const PedidoCampingModel = require("../models/PedidoCamping")

const insertPedidoCamping = async (newPedidoCamping) => {         // Crea un servicio
    return await PedidoCampingModel.create(newPedidoCamping)
}

const getAllPedidoCamping = async()=>{                     // optiene  todos los servicios
    return await PedidoCampingModel.find()
}

const getOnePedidoCamping = async(cedula)=>{            //  optiene un servicio 
    return await PedidoCampingModel.findOne({cedula})
}
const removeOnePedidoCamping = async(cedula)=>{                  // Remueve un servicio
    return await PedidoCampingModel.findOneAndDelete({cedula})
}
const updateOnePedidoCamping = async(cedula, newData)=>{
    return await PedidoCampingModel.findOneAndUpdate({cedula}, newData, {new: true})
}

module.exports={
    insertPedidoCamping,
    getAllPedidoCamping,
    getOnePedidoCamping,
    removeOnePedidoCamping,
    updateOnePedidoCamping 
}
