// Import model user
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Generate token Function
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Controller for user registration
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({ message: "Email already in used" })
    }

    const user = await User.create({ name, email, password });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400).json({ message: "Registration failed" })
    }

    // Controller for user login
}
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(401).json({ message: "Incorrect Email or Password" })
    }
}

module.exports = { registerUser, loginUser }

