const {request, response } = require('express');
const { insertarReserva, actualizaUnaReserva, obtenerReservas, eliminarUnaReserva } = require('../services/reservas.service');


const crearReserva = async (req, res) => {
    const reserva = req.body
    try{
        const nuevaReserva = await insertarReserva(reserva)
        res.json({
            ok:true,
            msg:'Secreo la reserva Exitosamente'
        })
    }catch(error){
        console.log(error)
        res.json({
            ok:false,
            msg:'Ocurrio un error al crear la reserva'
        })
    }
}

const obtenerReservas = async (req, res) =>{
    try{
        const data = await obtenerReservas()
        res.json({
            ok:true,
            data
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:'Ocurrio un error al obtener los productos'
        })
    }
}

const actualizarReserva = async (req, res) => {
    const id = req.params.id;
    const nuevaData = req.body
    try{
        const data = await actualizaUnaReserva(id, nuevaData)
        res.json({
            ok:true,
            data
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg:'ocurrio un error al actualizar la reserva'
        })
    }
}

const eliminarReserva = async (req, res) => {
    const id = req.params.id;
    const data = await eliminarUnaReserva(id)
    try{
        res.json({
            ok:true,
            msg:'Se elimino exitosamente'
        })
    }
    catch(error){
        console.log(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al eliminar la reserva'
        })
    }
}



module.exports = {
    crearReserva,
    obtenerReservas,
    actualizarReserva,
    eliminarReserva
}