const{Schema, model } = require('mongoose');

const PedidoCampingSchema = new Schema({
    productos: [],
    cedula:{
        type:String,
        required:true,
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