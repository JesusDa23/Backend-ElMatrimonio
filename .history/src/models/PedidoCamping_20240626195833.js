const{Schema, model } = require('mongoose');

const PedidoCampingSchema = new Schema({
    productos: [],
    cedula:{
        type:String,
        required:false,
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