import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { login, signup } from './routes/auth.js';
// import { login, signup } from "./routes/auth.js";
const app = express();
app.use(express.json()); //to recieve the data in json format
app.use(cors());
const port = process.env.PORT || 5000;
dotenv.config();

//Routes
app.post("/signup", signup);
app.post("/login",login);

//Mongodb configuration
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
    console.log('mongoDb connected')
}))
.catch((error)=>console.log(`${error} did not connect`));