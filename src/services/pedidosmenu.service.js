const PedidoModel = require ('../models/Pedido');

const ObtenerUnPedido = async () => {
    return await PedidoModel.find()
}
const crearUnPedido = async (nuevoPedido) => {
    return await PedidoModel.create(nuevoPedido)
}
const eliminarUnPedido = async (_id) => {
    return await PedidoModel.findOneAndDelete({_id}) 
}
const actualizarUnPedido = async (_id, newData) => {
    return await PedidoModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports = {
    ObtenerUnPedido,
    crearUnPedido,
    eliminarUnPedido,
    actualizarUnPedido
}