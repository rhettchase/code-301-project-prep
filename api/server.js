'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getResults = require('./handlers/results');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/stats', getResults);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
  next(); // Call next to pass the error to the next middleware
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
