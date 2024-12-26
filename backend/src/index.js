// src/server.js

const mongoose = require('mongoose'); 
const app = require('./app'); 
const clc = require("cli-color");


require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 3000; 
const MONGO_URI = process.env.MONGO_URI; 

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(clc.yellow('MongoDB connected successfully'));
    // Start the server
    app.listen(PORT, () => {
      console.log(clc.yellow(`Server running on http://localhost:${PORT}`));
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process if database connection fails
  });
