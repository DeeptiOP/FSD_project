const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors");

// load the env variables
dotenv.config();

// express app
const app = express();

// connect to the database
connectDB();

// add the middleware when we have the post api call
app.use(express.json());

app.use(cors())

//define the routes
app.use("/students", studentRoutes)

app.listen(process.env.PORT, () =>{
    console.log("Server is running");
})