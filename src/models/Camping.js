const{Schema, model } = require('mongoose');

const CampingSchema = new Schema({

    nombre:{
        type:String,
        required : true,
    },
    descripcion:{
        type:String,
        required : true,
    },
    urlImagen: {
        type: String,
    },
    precio: {
        type: Number,
        default: 0,
    }

})

const CampingModel = model(
    'Camping',  
    CampingSchema  
)

module.exports = CampingModel ;