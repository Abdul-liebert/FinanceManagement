const jwt = require('jsonwebtoken');
const user = require('../models/userModel');

const protect = async (req, res, next) => {
    let token;

    // Pastikan menggunakan headers (plural)
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Ambil token dari header
            token = req.headers.authorization.split(' ')[1];

            // Verifikasi token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Cari user berdasarkan ID dari token
            req.user = await user.findById(decoded.id).select('-password');

            // Lanjutkan ke middleware berikutnya
            return next();
        } catch (error) {
            return res.status(401).json({ Message: 'Invalid token', Error: error.message });
        }
    }

    // Jika token tidak ditemukan
    if (!token) {
        return res.status(401).json({ Message: 'Token is required, access denied' });
    }
};

module.exports = { protect };
