const { obtenerReservas, eliminarReserva } = require('../controllers/reservas.controller');
const ReservaModel = require('../models/Reserva');

const insertarReserva = async (nuevaReserva) => {
    return await ReservaModel.create(nuevaReserva)
}

const obtenerReservas = async () => {
    return await ReservaModel.find();
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
    obtenerReservas,
    actualizaUnaReserva,
    eliminarUnaReserva
}