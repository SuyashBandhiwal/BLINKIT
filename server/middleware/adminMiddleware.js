const adminOnly = (req, res, next) => {
    // User login hai? - 1st condition
    // User ka role admin hai? - 2nd condition
    if (req.user && req.user.role === 'admin') {
        // Sab check ho gaya
        // Ab next function chalao
        next()
    } else {
        res.status(403).json({ message: 'Admin access only' })
    }
}

module.exports = { adminOnly }