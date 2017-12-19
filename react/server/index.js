const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('./models/keep');

const routes = require('./routes/index');

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
  useMongoClient: true,
});

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(3000);
