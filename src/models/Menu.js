const {Schema, model} = require ('mongoose');

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type : Number,
        required : true
    },
    urlImage: {
        type: String,
        required: false
    },
    type: {
        type: String
    }
},
{
    timestamps: true
});

const MenuModel = model('Menu',MenuSchema)

module.exports = MenuModel

//TOdo: crear el esquema para los pedidos del menu :)
