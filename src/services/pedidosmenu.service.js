const PedidoModel = require ('../models/Pedidos');

const ObtenerUnPedido = async () => {
    return await PedidoModel.find()
}

const ObtenerUnPedidoPorId= async (cedula) => {
    return await PedidoModel.findOne({cedula})
}

const   crearUnPedido = async (nuevoPedido) => {
    return await PedidoModel.create(nuevoPedido)
}
const eliminarUnPedido = async (cedula) => {
    return await PedidoModel.findOneAndDelete({cedula}) 
}
const actualizarUnPedido = async (_id, newData) => {
    return await PedidoModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports = {
    ObtenerUnPedido,
    ObtenerUnPedidoPorId,
    crearUnPedido,
    eliminarUnPedido,
    actualizarUnPedido
}