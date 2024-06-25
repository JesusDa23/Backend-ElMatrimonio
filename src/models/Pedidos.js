const {Schema, model} = require ('mongoose');

const PedidoSchema = new Schema({
    productos: [],
    total: {
        type: Number,
        default: 0
    },
    cedula: {
        type: String,
        required: true,
        ref: 'Reserva',
    }
}
);

const PedidoModel = model('Pedido', PedidoSchema)

module.exports = PedidoModel