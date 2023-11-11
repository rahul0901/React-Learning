// console.log("hi")
// console.log("hi")
import express from 'express';
import router from './Routes/index.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', function(req, res){
    res.send('hi from backend')
})

app.use('/api/v1', router)

app.listen(8000, ()=> console.log('port running on 8000'))