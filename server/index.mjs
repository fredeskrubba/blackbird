import 'dotenv/config'
import mongoose from 'mongoose';
import express from 'express';
import cors from "cors";
import routes from "./routes/routes.mjs"

const app = express();
const port = process.env.PORT
const dbString = process.env.DB_STRING

mongoose.connect(dbString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})