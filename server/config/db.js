const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); //Loading env variables from .env file

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected successfully");
    } catch(error){
        console.log("Error to connect the database");
    }
}

module.exports = connectDB;