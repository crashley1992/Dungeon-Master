const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("client"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up mongo connection

app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
  });