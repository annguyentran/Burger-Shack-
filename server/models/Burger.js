const { Schema } = require('mongoose');

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
        extraOptions: {
            type: [
                {
                    SideDishAndDrink: { type: String, required: true },
                    price: { type: Number, required: true },
                },
            ],

        },
    },

);


module.exports = burgerSchema;