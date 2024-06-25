
const UserModel = require('../models/User');

const insertarcliente = async (nuevoCliente) => {
    return await UserModel.create(nuevoCliente)
}

const obtenerLosClientes = async () => {
    return await UserModel.find();
}

const obtenerUnaClientePorId = async (cedula) => {
    return await UserModel.findOne({cedula})
}

const actualizaUnCliente = async (cedula, dataActualizada) => {
    return await UserModel.findOneAndUpdate({cedula}, dataActualizada,{new:true}
);
}

const eliminarUnCliente = async (cedula) => {
    return await UserModel.findOneAndDelete(cedula)
}

module.exports = {
    insertarcliente,
    obtenerLosClientes,
    obtenerUnaClientePorId,
    actualizaUnCliente,
    eliminarUnCliente
}