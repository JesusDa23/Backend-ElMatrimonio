
const ReservaModel = require('../models/Reserva');

const insertarReserva = async (nuevaReserva) => {
    return await ReservaModel.create(nuevaReserva)
}

const obtenerUnaReserva = async () => {
    return await ReservaModel.find();
}

const obtenerUnaReservaPorId = async (_id) => {
    return await ReservaModel.findOne({_id})
}

const actualizaUnaReserva = async (_id, dataActualizada) => {
    return await ReservaModel.findOneAndUpdate({_id}, dataActualizada,{new:true}
);
}

const eliminarUnaReserva = async (_id) => {
    return await ReservaModel.findOneAndDelete({_id},)
}

module.exports = {
    insertarReserva,
    obtenerUnaReserva,
    obtenerUnaReservaPorId,
    actualizaUnaReserva,
    eliminarUnaReserva
}