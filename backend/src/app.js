// src/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => res.send('Welcome to Micro Instagram Backend!'));

module.exports = app;
