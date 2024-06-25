const {Schema, model } = require ('mongoose')

const ReservaSchema = new Schema({
    fechaReserva: {
        type: String,
        required:true
    },
    horaLlegada:{
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
    },
    cedula: {
        type: String,
        required: true,
        ref: 'Reserva',
        uniqued:true
    }
})

const ProductModel = model(
    'Reservas',
    ReservaSchema
)

module.exports = ProductModel;