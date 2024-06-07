const {Schema, model } = require ('mongoose')

const ReservaSchema = new Schema({
    nombre: {
        type: String,
        required:true
    },
    idUsuario: {
        type: Number,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    fechaReserva: {
        type: Date,
        required:true
    },
    horaLLegada:{
        type:String,
        required: true
    },
    tipoServicio:{
        type:String,
        required:true
    },
    cantidadPersonas:{
        type: String,
    }, 
    estado: {
        type:String,
        required: true
    }
})

const ProductModel = model(
    'Reservas',
    ReservaSchema
)

module.exports = ProductModel;