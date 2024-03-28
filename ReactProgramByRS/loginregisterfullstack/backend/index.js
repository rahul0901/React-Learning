import express from 'express';
import router from './Routes/index.js';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const api = express();
api.use(cors());
api.use(morgan('dev'))
api.use(express.json())
dotenv.config()

// api.get('/', function(req,res){
//     res.send('hi backend')
// })

api.use('/api/v1', router)

api.connect(mongoose.connect(process.env.MongoURL).then(()=> console.log('database connected')))

api.listen(8000, ()=>console.log('port running on 8000'))


console.log('hi backend..');