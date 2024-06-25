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
    }
},
{
    timestamps:true
})

const UserModel = model('Users',
    UserSchema
)

module.exports = UserModel;

