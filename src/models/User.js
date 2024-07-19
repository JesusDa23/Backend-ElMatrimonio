const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
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
    role: {
        type: String,
        required: false,
        default: 'registered'
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
        ref: 'Users',
        default: 'pendiente'
    },
},
{
    timestamps:true
})

const UserModel = model('Users',
    UserSchema
)

module.exports = UserModel;

