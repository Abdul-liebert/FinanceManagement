// Import library
const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db");

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Route
const userRoutes = require('./routes/userRoutes');

// Import Finance
const financeRoutes = require('./routes/financeRoutes')

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/finances', financeRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// Running server
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
