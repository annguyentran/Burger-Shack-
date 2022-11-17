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

const Burger = model("Burger", burgerSchema);
module.exports = Burger;