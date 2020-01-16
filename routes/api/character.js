const mongoose = require('mongoose');
const router = require('express').Router();
const controller = require("../../controllers/characterController");

router.get("/:userid", controller.findAll);

// Route for grabbing a specific Character by id
router.get("/:userid/:charid", controller.findOne);

// Route for saving/updating
//  { character: character._id }
router.post("/:userid", controller.create);

router.put("/:userid/:charid", controller.update);


module.exports = router;