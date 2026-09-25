const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        category: {
            type: String,
            required: [true, 'Please add a category'],
            enum: ['Starters', 'Main Course', 'Desserts', 'Drinks'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        image: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('MenuItem', menuItemSchema);
