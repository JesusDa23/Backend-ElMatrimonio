const {request, response } = require('express');
const { insertarcliente, actualizaUnCliente, eliminarUnCliente, obtenerLosClientes, obtenerUnaClientePorId } = require('../services/users.services');



const crearCliente = async (req, res) => {
    const cliente = req.body;
    try{
        const nuevoCliente = await insertarcliente(cliente)
        res.json({
            ok:true,
            data:nuevoCliente,
            msg:'Se creo el cliente exitosamente'
        })
    }catch(error){
        console.log(error)
        res.json({
            ok:false,
            msg:'Ocurrio un error al crear el cliente'
        })
    }
}

const obtenerClientes = async (req, res) =>{
    try{
        const data = await obtenerLosClientes()
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

const obtenerClientePorId = async (req, res) => {
    const cedula = req.params.cedula;
    try {
        const data = await obtenerUnaClientePorId(cedula)
        res.json({
                ok:true,
                data,
                msg:'se encontro exitosamente'
            })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg:'ocurrio un error al obtener el cliente por su id'
        })
    }
}


const actualizarCliente = async (req, res) => {
    const id = req.params.cedula;
    const nuevaData = req.body
    try{
        const data = await actualizaUnCliente(id, nuevaData)
        res.json({
            ok:true,
            data
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg:'ocurrio un error al actualizar el cliente'
        })
    }
}

const eliminarCliente = async (req, res) => {
    const cedula = req.params.cedula;
    const data = await eliminarUnCliente(cedula)
    try{
        res.json({
            ok:true,
            data,
        })
    }
    catch(error){
        console.log(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al eliminar el cliente'
        })
    }
}



module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
}