const {Schema, model} = require ('mongoose');

const PedidoSchema = new Schema({

    productos: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type : Number,
            required : true
        },
        cantidad: {
            type: Number,
            require: true
        }
    }],
    total: {
        type:String,
        require:true
    }
},
{
    timestamps: true
});

const PedidoModel = model('Pedido', PedidoSchema)

module.exports = PedidoModel