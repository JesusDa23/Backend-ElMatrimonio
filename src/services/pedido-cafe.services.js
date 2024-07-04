const PedidoCafeModel = require ("../models/Pedidocafe")

const insertPedidoCafe = async (newCafe) =>{                  // Crea un nuevpo café
    return await PedidoCafeModel.create(newCafe)
}

const getAllPedidocafes = async()=>{                          // Optiene  todos los cafes
    return await PedidoCafeModel.find()
}
const getOnePedidoCafe = async(cedulaCafe)=>{                     //  Optiene un cafe 
    return await PedidoCafeModel.findOne({cedula:cedulaCafe})
}
const removeOnePedidoCafe= async(cedula)=>{                      // Remueve un cafe
    return await PedidoCafeModel.findOneAndDelete({cedula})
}
const updateOnePedidoCafe= async(cedula, newData)=>{             // Actualiza un cafe
    return await PedidoCafeModel.findOneAndUpdate({cedula}, newData, {new: true})
}

module.exports={
    insertPedidoCafe,
    getAllPedidocafes,
    getOnePedidoCafe,
    removeOnePedidoCafe,
    updateOnePedidoCafe
}