const{Schema, model } = require('mongoose');


const PedidoCafeSchema = new Schema({
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    productos: [],
    total: {
        type: Number,
        default: 0
    } 

    },
    {   
        timestamps: true
    });

    
const PedidoCafeModel = model (
    'PedidoCafe', 
    PedidoCafeSchema,
)
module.exports = PedidoCafeModel;