const {Schema,   //definir la estructura de los documentos que va a guardarse en una collecion
    model        // va asociar la estructura al nombre de una collecion
} = require('mongoose');


// Instaciamos el Schema de Mongoose para definir la estructura de datos (Modelo)
const ProductSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: String,    //Objecto resumido - No obligatorio
    price: {
        type: Number,
        default: 0,
    },
    quantify: {
        type: Number,
        require: true
    },
    category: {
        type:String,
        require: true,
        default: 'non-category'
    },
    urlImage: {
        type: String,
    },
    userId: {
        type: String,
        require: false // TODO: Volverlo obligatorio cuando el sistema de autenticacion este listo
    }
},{
    timestamps: true
});


// Asocia el Modelo deifinido a un nombre para la collecion en la base de datos
const ProductModel = model(
    'Product',  //name de la entidad(coleccion en la base de datos)
    ProductSchema  
)

module.exports = ProductModel;  //exponemos el Modelo de datos