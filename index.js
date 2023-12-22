const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dataRoutes = require('./router/router');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});