const CafeModel = require ("../models/cafe")

const insertCafe = async (newCafe) =>{                  // Crea un nuevpo café
    return await CafeModel.create(newCafe)
}

const getAllcafes = async()=>{                          // Optiene  todos los cafes
    return await CafeModel.find()
}
const getOneCafe = async(idCafe)=>{                     //  Optiene un cafe 
    return await CafeModel.findOne({_id:idCafe})
}
const removeOneCafe= async(_id)=>{                      // Remueve un cafe
    return await CafeModel.findOneAndDelete({_id})
}
const updateOneCafe= async(_id, newData)=>{             // Actualiza un cafe
    return await CafeModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports={
    insertCafe,
    getAllcafes,
    getOneCafe,
    removeOneCafe,
    updateOneCafe, 
}