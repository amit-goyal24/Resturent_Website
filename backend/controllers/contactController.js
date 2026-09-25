const Contact = require('../models/Contact');

const createContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            res.status(400);
            throw new Error('Please include all required fields');
        }

        const contact = await Contact.create({
            name,
            email,
            message,
        });

        if (contact) {
            res.status(201).json({
                success: true,
                message: 'Your message has been sent successfully.',
            });
        } else {
            res.status(400);
            throw new Error('Invalid contact data');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createContact,
};
