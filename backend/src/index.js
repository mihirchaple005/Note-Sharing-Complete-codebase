import dotenv from 'dotenv'
import connectDB from './db/db.js'
import { app } from './app.js'

dotenv.config({
    path : './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT , ()=> {
        console.log(`Listening to the PORT : ${process.env.PORT}`);
    })
    app.on("error" , (err) => {
        console.log("error after connection and listening : ", err)
    })
})
.catch((err) => {
    console.log("error while connecting to DB : ",err)
})