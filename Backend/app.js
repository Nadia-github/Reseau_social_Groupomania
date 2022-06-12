const userRoute = require ('./routes/user')

const postsRoute = require ('./routes/posts')

const path = require('path');

const cors = require('cors')

const express = require ('express');

const bodyParser = require ('body-parser');

const app = express();


require ("dotenv").config();

app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(express.urlencoded({extended: true}));

  app.use(express.json())

  app.use('/api/auth', userRoute)

  app.use('/api/posts', postsRoute);

  app.use('/images', express.static(path.join(__dirname, 'images')));

  
  
  module.exports = app;

