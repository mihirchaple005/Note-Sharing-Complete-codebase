import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

const app = express();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("Error connecting to DB => ",err)
        })
        console.log(`MongoDB connected to the Host : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log("unable to cennect ot DB : ", err);
        process.exit(1);
    }
}

export default connectDB