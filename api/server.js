'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getStandings = require('./handlers/standings');

const PORT = process.env.PORT || 3001;

const app = express();

// database
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`We're connected!`);
});

// middleware
app.use(cors());
app.use(express.json());

// routes
// app.get('/highlights', getHighlights);
app.get('/standings/:leagueCode', getStandings);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
  next(); // Call next to pass the error to the next middleware
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
