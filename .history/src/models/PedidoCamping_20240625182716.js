const{Schema, model } = require('mongoose');

const PedidoCampingSchema = new Schema({

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

const PedidoCampingModel = model(
    'PedidoCamping',  
    PedidoCampingSchema  
)

module.exports = PedidoCampingModel ;