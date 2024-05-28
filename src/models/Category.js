const {Schema, model} = require ('mongoose');

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
},
{
    timestamps: true
});

const CategoryModel = model('Category',CategorySchema)

module.exports = CategoryModel