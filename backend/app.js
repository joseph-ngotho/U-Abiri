const express = require('express');
const cors = require('cors');

const app = express();

const vehiclesRoute = require('./routes/vehicles');
const systemUserRoute = require('./routes/systemUser')


app.use(cors());
app.use(express.json());

app.use( "/vehicles" , vehiclesRoute);
app.use("/systemUser", systemUserRoute);

module.exports = app