const db = require("../models/Character");

var email;

// Defining methods for the controller
module.exports = {
    findAll: function(req, res) {
        db.Character.find({email: req.body.email})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Character.findOne({email: req.body.email}, {name: req.body.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Character.create({email: req.body.email}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Character.findOneAndUpdate({email: req.body.email}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Character.findOne({email: req.body.email})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};