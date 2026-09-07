const express = require('express')
const router = express.Router()
// authController.js file se registerUser aur loginUser function uthakar yahan le aao
const { registerUser, loginUser } = require('../controllers/authController')

// Agar POST request /register par aaye,
// to registerUser function chala do
router.post('/register', registerUser)
// Agar POST request /login par aaye,
// to loginUser function chala do
router.post('/login', loginUser)

module.exports = router