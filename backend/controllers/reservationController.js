const Reservation = require('../models/Reservation');

const createReservation = async (req, res, next) => {
    try {
        const { name, phone, email, guests, date, time, request } = req.body;

        // Basic validation
        if (!name || !phone || !email || !guests || !date || !time) {
            res.status(400);
            throw new Error('Please include all required fields');
        }

        const reservation = await Reservation.create({
            name,
            phone,
            email,
            guests: Number(guests),
            date,
            time,
            specialRequest: request || '',
        });

        if (reservation) {
            res.status(201).json({
                success: true,
                message: 'Reservation request submitted successfully.',
            });
        } else {
            res.status(400);
            throw new Error('Invalid reservation data');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createReservation,
};
