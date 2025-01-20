// Import library
const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/db")

dotenv.config();

const app = express();

// Import Route
// const userRoutes = require('./routes/userRoutes')
// const financeRoutes = require('./routes/financeRoutes')

// Use Routes
// app.use('/api/users', userRoutes)
// app.use('/api/finance', financeRoutes)

// PORT
const PORT = process.env.PORT || 5000;

// Running server
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));