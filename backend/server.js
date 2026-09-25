require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/reservations', require('./routes/reservationRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/menu', require('./routes/menuRoutes'));

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'The Green Plate API is running' });
});

// Error Middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
