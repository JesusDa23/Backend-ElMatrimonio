const {Schema, model } = require ('mongoose')

const ReservaSchema = new Schema({
    nombre: {
        type: String,
        required:true
    },
    idUsuario: {
        type: String,
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
        required:false
    },
    cantidadPersonas:{
        type: Number,
        required:false
    }, 
    estado: {
        type:String,
        required:false,
        default: 'pendiente'
    }
})

const ProductModel = model(
    'Reservas',
    ReservaSchema
)

module.exports = ProductModel;