import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { boatsRouter, bookingsRouter } from "./router/index.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const URI = process.env.URI;


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use('/img', express.static('data/img'));





app.use('/api/v1/boats', boatsRouter.default);
app.use('/api/v1/bookings', bookingsRouter.default);








const runServer = async () => {
    console.log('Starting app...');
    app.listen(PORT, console.log("app RUNNING @ Port: " + PORT));
};




const connectDatabase = async () => {
    try {
        console.log('Connecting to BoatBooking database...');
        await mongoose.connect(URI, { dbName: 'BoatBooking' });
        console.log(('Connection to database succeeded!'));
    } catch (err) {
        console.log('Connection to database failed: ', err);
    };
};



connectDatabase()
    .then(runServer)
    .catch(err => console.log(err));



