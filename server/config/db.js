const mongoose = require('mongoose')

const connectDB = async () => {
    // Main connection banane ki koshish karunga
    // Agar successful hua to try chalega
    try {
        //MongoDB Atlas se connection banata hai
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        // Server ko band kar deta hai
        process.exit(1)
    }
}

module.exports = connectDB