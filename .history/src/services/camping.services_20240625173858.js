const CampingModel = require("../models/Camping")

const insertCamping = async (newCamping) => {         // Crea un servicio
    return await CampingModel.create({newCamping})
}

const getAllCamping = async()=>{                     // optiene  todos los servicios
    return await CampingModel.find()
}

const getOneCamping = async(idCamping)=>{            //  optiene un servicio 
    return await CampingModel.findOne({_id:idCamping})
}
const removeOneCamping = async(_id)=>{                  // Remueve un servicio
    return await CampingModel.findOneAndDelete({_id})
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
