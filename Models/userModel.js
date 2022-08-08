const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 30,
        unique: true,
    },
    points: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Users", userSchema)