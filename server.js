const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { mongoURI, localMongoURI } = require('./config/keys');


// Require Routes
const Items = require('./routes/api/items');


// BodyParser Middware
app.use(bodyParser.json());

// mongoose options
mongoose.Promise = global.Promise;


// Test Connection to DB

const DB_SRTING = process.env.NODE_ENV === 'production' ? mongoURI : localMongoURI;


mongoose
    .connect(DB_SRTING, { useNewUrlParser: true })
    .then(() => console.log('connect DB: success'))
    .catch(err => console.log(`connect DB: fail, error: ${err}`));



// Use Routes
app.use('/api/items', Items);


// Serve static assets if in production
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


/* use this expression when deployed
if (process.env.NODE_ENV === 'production') {
   // set static folder
   app.use(express.static('public'));

   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
   });
}
*/


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));