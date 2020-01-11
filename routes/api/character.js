const mongoose = require('mongoose');
const router = require('express').Router();
const Character = mongoose.model('Character');

const router = express.Router();

const db = require('../models/Character');

router.get("/character", (req, res) => {
	//queries for characters in mongo and sorts by most recent 
	db.Character.find().sort({ timestamp: -1 })
		.then((character) => {
			res.json(character);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Route for grabbing a specific Character by id
router.get("/character/:id", (req, res) => {
	db.Character.findById({ _id: req.params.id })
		.populate()
		.then((character) => {
			res.json(character);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Route for saving/updating a Character
router.post("/character/:id", (req, res) => {
	console.log(req.body);
	db.Character.create(req.body)
		.then((character) => {
			return db.Character.findByIdAndUpdate({ _id: req.params.id }, { character: character._id }, { new: true });
		})
		.then((character) => {
			res.json(character);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.put("/character/:id", (req, res) => {
	console.log(req.body);
	db.Character.remove(req.body)
		.then((character) => {
			return db.Character.findByIdAndUpdate({ _id: req.params.id }, { character: character._id }, { new: true });
		})
		.then((character) => {
			res.json(character);
		})
		.catch((err) => {
			res.json(err);
		});
});


module.exports = router;