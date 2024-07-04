const{Schema, model } = require('mongoose');


const PedidoCafeSchema = new Schema({
    cedula: {
        type: String,
        required: false,
        unique: true
    },
    productos: [],
    total: {
        type: Number,
        default: 0
    },
    cantidad: {
        type: Number,
        required: true,
    },

    },
    {   
        timestamps: true
    });

    
const PedidoCafeModel = model (
    'PedidoCafe', 
    PedidoCafeSchema,
)
module.exports = PedidoCafeModel;