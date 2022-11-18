const { Schema, model } = require('mongoose');

const burgerSchema = new Schema(
    {
        title: {
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
            required: true,
        },
        prices: {
            type: [Number],
            required: true,
        },

        sides: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Side'
            }
        ]

    },
    {
        drinks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Drink'

            }
        ]
    }

);
const Burger = model('Burger', burgerSchema);


module.exports = Burger;