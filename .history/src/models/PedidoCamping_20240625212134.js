const{Schema, model } = require('mongoose');

const PedidoCampingSchema = new Schema({

    nombre:{
        type:String,
        required : true,
    },
    cedula:{
        type:String,
        required:true,
    },
    precio: {
        type: Number,
        default: 0,
    },
    total:{
        type: Number,
        required:true,
    }

})

const PedidoCampingModel = model(
    'PedidoCamping',  
    PedidoCampingSchema  
)

module.exports = PedidoCampingModel;