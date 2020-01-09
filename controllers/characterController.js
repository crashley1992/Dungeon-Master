const db = require("../models/Character");

// Defining methods for the controller
module.exports = {
    findAll: function(req, res) {
        db.Character.find({email: req.params.email})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Character.findOne({email: req.params.email, name: req.body.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Character.create({email: req.params.email}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Character.findOneAndUpdate({email: req.params.email, name: req.body.name}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Character.findOne({email: req.params.email, name: req.body.name})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};