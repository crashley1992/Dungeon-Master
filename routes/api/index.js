const express = require('express');
const router = express.Router();

const users = require('./users');
const characters = require('./character')

router.use('/', users);
router.use('/character', characters);

module.exports = router;