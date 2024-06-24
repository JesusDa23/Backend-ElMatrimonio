const {Schema, model} = require ('mongoose');

const PedidoSchema = new Schema({
    productos: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type : Number,
            required : true
        },
        cantidad: {
            type: Number,
            require: true
        }
    }],
    total: {
        type:String,
        require:true
    },

    cliente: [{      
        nombre: {
            type:String,
            ref: 'Reservas',
            required:true
        },
        cedula: {
            type:String,
            ref: 'Reservas',
            required:true,
            unique: true
        },
        email: {
            type: String,
            ref:'Reservas',
            required:true
        },
        telefono: {
            type:String,
            ref: 'Reservas',
            required:true
        },
        cantidadPersonas: {
            type:Number,
            ref: 'Reservas',
            required:true
        },
        fechaReserva: {
            type:String,
            ref: 'Reservas',
            required:true
        },
        horaLlegada:{
            type:String,
            ref: 'Reservas',
            required:true
        }
    }] 
},
{
    timestamps: true
});

const PedidoModel = model('Pedido', PedidoSchema)

module.exports = PedidoModel