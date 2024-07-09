const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const addDummyDataRoute = require('./routes/addDummyData');
const getAllDataRoute = require('./routes/getAllData'); 
const deleteDataRoute = require('./routes/deleteData');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/add', addDummyDataRoute);
app.use('/get', getAllDataRoute);
app.use('/delete', deleteDataRoute); 

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

module.exports = { app, startServer };
