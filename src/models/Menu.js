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
    type: {
        type: String
    }
},
{
    timestamps: true
});

const MenuModel = model('Menu',MenuSchema)

module.exports = MenuModel