const{Schema, model } = require('mongoose');

const ServicioSchema = new Schema({

    nombre:{
        type:String,
        require : true,
    },
    descripcion:{
        type:String,
        require : true,
    },
    urlImagen: {
        type: String,
    },
    numPersonas: {
        type: Number,
    },
    precio: {
        type: Number,
        default: 0,
    },
})

const ServicioModel = model(
    'Servicio',  
    ServicioSchema  
)

module.exports = ServicioModel ;