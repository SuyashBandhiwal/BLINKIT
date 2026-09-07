// JWT token verify karne ke liye
const jwt = require('jsonwebtoken')
// Database se user ki details lane ke liye
const User = require('../models/User')

const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization

        if (!token) {
            // Token nahi mila?
            return res.status(401).json({ message: 'Not authorized' })
        }

        token = token.split(' ')[1]
        
        // Token asli hai?
        // Expire nahi hua?
        // Secret sahi hai?
        // Agar sab sahi hai to: decoded
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // User.findById(decoded.id)- Database se user la dega
        // -password - password mat lao
        req.user = await User.findById(decoded.id).select('-password')

        next()

    } catch (error) {
        res.status(401).json({ message: 'Not authorized' })
    }
}

module.exports = { protect }