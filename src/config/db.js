// Import Library
const mongoose = require('mongoose')

// Function to connect MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Tambahkan timeout untuk koneksi stabil
        });
        console.log(`MongoDB Terkoneksi: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Keluar dari aplikasi jika gagal
    }
};

module.exports = connectDB;