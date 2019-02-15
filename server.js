const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { mongoURI } = require('./config/keys');


// Require Routes
const Items = require('./routes/api/items');


// BodyParser Middware
app.use(bodyParser.json());

// mongoose options
mongoose.Promise = global.Promise;


// Test Connection to DB
mongoose
    .connect(mongoURI)
    .then(() => console.log('connect DB: success'))
    .catch(err => console.log(`connect DB: fail, error: ${err}`));



// Use Routes
app.use('/api/items', Items);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));