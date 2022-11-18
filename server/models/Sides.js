const { Schema, Types } = require('mongoose');

const sideSchema = new Schema (
    {
        sideId:{
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

module.exports = sideSchema; 