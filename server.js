import express from 'express'
import { config } from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/userRoute.js'
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

//.env setup
config({path:'.env'})
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home route!')
})

app.use('/user', userRoute)

app.listen(PORT, "0.0.0.0", () => {
    connectDB()
    console.log(`Server is running at port ${PORT}`);
})
