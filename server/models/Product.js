const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 60,
        },
        description: {
            type: String,
            required: true,
            maxlength: 200,
        },
        img: {
            type: String,
            required: false,
        },
        price: {
            type: Number,
            required: true,
            min: 0.99
        },

        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        }
    }

);
const Product = model('Product', productSchema);

module.exports = Product;