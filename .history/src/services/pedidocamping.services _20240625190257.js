const PedidoCampingModel = require("../models/PedidoCamping")

const insertPedidoCamping = async (newPedidoCamping) => {         // Crea un servicio
    return await PedidoCampingModel.create({newPedidoCamping})
}

const getAllPedidoCamping = async()=>{                     // optiene  todos los servicios
    return await PedidoCampingModel.find()
}

const getOnePedidoCamping = async(cedulaCamping)=>{            //  optiene un servicio 
    return await PedidoCampingModel.findOne({cedulaCamping})
}
const removeOnePedidoCamping = async(_cedula)=>{                  // Remueve un servicio
    return await PedidoCampingModel.findOneAndDelete({_cedula})
}
const updateOnePedidoCamping = async(_cedula, newData)=>{
    return await PedidoCampingModel.findOneAndUpdate({_cedula}, newData, {new: true})
}

module.exports={
    insertPedidoCamping,
    getAllPedidoCamping,
    getOnePedidoCamping,
    removeOnePedidoCamping,
    updateOnePedidoCamping 
}
