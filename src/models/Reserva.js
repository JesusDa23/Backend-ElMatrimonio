const {Schema, model } = require ('mongoose')

const ReservaSchema = new Schema({
    nombre: {
        type: String,
        required:true
    },
    cedula: {
        type: String,
        required:true,
        unique: true
    },
    email: {
        type:String,
        required:true
    },
    telefono: {
        type: String,
        required:true
    },
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
    }
})

const ProductModel = model(
    'Reservas',
    ReservaSchema
)

module.exports = ProductModel;