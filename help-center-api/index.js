import express from 'express';
import dbConnect from './config/db.js';
import cardRoutes from './routes/cardRoutes.js';
import cors from 'cors';
// require('dotenv').config();

// const dotenv = require('dotenv');
// dotenv.config();

// import dotenv from 'dotenv';
// dotenv.config();

// import 'dotenv/config';




const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use(cors());


dbConnect()


app.get('/ping', (req, res) => res.send('Server is running'));
app.use('/cards', cardRoutes);



  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
