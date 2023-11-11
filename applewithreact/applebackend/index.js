// console.log("hi")
// console.log("hi")
import express from 'express';
import router from './Routes/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// app.get('/', function(req, res){
//     res.send('hi from backend')
// })

app.use('/api/v1', router)

mongoose.connect(process.env.MongoUrl).then(()=> console.log('Database Connected'))

app.listen(8000,()=> console.log('port running on 8000'))