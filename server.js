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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Configure Mongoose for Passwords/Logins
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dungeon-master-logins";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to DB');
    require('./models/Users');
    require('./models/Character');
  }
});

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