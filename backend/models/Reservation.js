const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        phone: {
            type: String,
            required: [true, 'Please add a phone number'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email',
            ],
        },
        guests: {
            type: Number,
            required: [true, 'Please specify number of guests'],
            min: [1, 'Must be at least 1 guest'],
        },
        date: {
            type: String,
            required: [true, 'Please add a date'],
        },
        time: {
            type: String,
            required: [true, 'Please add a time'],
        },
        specialRequest: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Reservation', reservationSchema);
