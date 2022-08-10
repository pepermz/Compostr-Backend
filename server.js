
// TO RUN ( npm run dev )

require("dotenv").config()
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const User = require('./Models/userModel')
const bodyParser = require("body-parser")
const userRoutes = require("./Routes/userRoutes")
const authRoutes = require("./Routes/auth")
const cors = require("cors")

// Middleware
app.use(express.json())
app.use(cors())


//Routes
app.use("http://localhost:4000/api/users", userRoutes)
app.use("http://localhost:4000/api/auth", authRoutes)

//Database Connection
mongoose.connect(MONGODB_URL)

// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error))




   
     






// Listening on PORT
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))