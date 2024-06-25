
const ReservaModel = require('../models/Reserva');

const insertarReserva = async (nuevaReserva) => {
    return await ReservaModel.create(nuevaReserva)
}

const obtenerUnaReserva = async () => {
    return await ReservaModel.find();
}

const obtenerUnaReservaPorId = async (cedula) => {
    return await ReservaModel.findOne({cedula})
}

const actualizaUnaReserva = async (_id, dataActualizada) => {
    return await ReservaModel.findOneAndUpdate({_id}, dataActualizada,{new:true}
);
}

const eliminarUnaReserva = async (cedula) => {
    return await ReservaModel.findOneAndDelete({cedula})
}

module.exports = {
    insertarReserva,
    obtenerUnaReserva,
    obtenerUnaReservaPorId,
    actualizaUnaReserva,
    eliminarUnaReserva
}