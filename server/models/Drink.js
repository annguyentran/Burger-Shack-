const { Schema, Types } = require('mongoose');

const drinkSchema = new Schema(
    {
        drinkId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }
    },
    {
        name: {
            type: String,
            required: true,
        }
    },
    {
        description: {
            type: String,
            required: false,
            trim: true
        }
    },
    {
        price: {
            type: Number,
            required: true

        }
    },
    {
        toJSON: {
            virtuals: true,
        },
    }

)


module.exports = drinkSchema;