const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3001;

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//required models
require('./config/passport');
const routes = require('./routes');


app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(session({ secret: 'dungeon-master-logins', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dungeon-master-logins";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dungeon-master-logins");

//routes used
app.use(routes);

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});