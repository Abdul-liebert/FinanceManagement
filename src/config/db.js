// Import Library
const mongoose = require('mongoose')

// Function to connect MongoDB
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            userNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error){
        console.error(`Error: ${error.message}`)
        process.exit(1);
    }
};

module.exports = connectDB;