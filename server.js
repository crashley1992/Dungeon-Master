const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

const PORT = process.env.PORT || 3001;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(session({ secret: 'dungeon-master-logins', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

// set up mongo for what database it's using
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/default";

// connect
mongoose.connect(MONGODB_URI);

const dbc = mongoose.connection;

dbc.on('error', console.error.bind(console, 'connection error:'));
dbc.once('open', () => {
    console.log('connected');
    require('./models/Users');
});

// var charsDB = require("./models/Character");

//models and routes
require('./config/passport');
const routes = require('./routes');
app.use(routes);

//Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
});