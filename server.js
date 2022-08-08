
// TO RUN ( npm run dev )

require("dotenv").config()
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")

//Database Connection
mongoose.connect(MONGODB_URL)

// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error))




// Listening on PORT
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))