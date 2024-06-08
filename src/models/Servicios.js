const{Schema, model } = require('mongoose');

const ServicioSchema = new Schema({

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
    numPersonas: {
        type: Number,
    },
    precioDeco: {
        type: Number,
        default: 0,
    },
    menu_id:{
        type: String,
        required: false         // volver true
    }

})

const ServicioModel = model(
    'Servicio',  
    ServicioSchema  
)

module.exports = ServicioModel ;