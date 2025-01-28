const mongoose = require('mongoose')

const financeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: [true, 'title is required']
        },
        amount: {
            type: Number,
            required: [true, 'amount is required']
        },
        type: {
            type: String,
            required: [true, 'type is required'],
            enum: ['income', 'expense']
        },

    },
    {
        timestamps: true
    }
)

const Finance = mongoose.model('Finance', financeSchema)

module.exports= Finance