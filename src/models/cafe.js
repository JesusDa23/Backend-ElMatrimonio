const{Schema, model } = require('mongoose');

const CafeSchema = new Schema({
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
        required : false,
    },
    precio: {
        type: Number,
        default: 0,
    },
    tipo:{
        type: String,
    }
})

const CafeModel = model (
    'Cafe', 
    CafeSchema,
)

module.exports = CafeModel;