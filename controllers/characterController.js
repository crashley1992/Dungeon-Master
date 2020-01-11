const db = require("../models/Character");

// Defining methods for the controller
module.exports = {
    findAll: function(req, res) {
        db.Character.find({userID: req.params.userID})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Character.findOne({userID: req.params.userID, charID: req.params.charID})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Character.create({userID: req.params.userID}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Character.findOneAndUpdate({userID: req.params.userID, charID: req.params.charID}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Character.findOne({userID: req.params.userID, charID: req.params.charID})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};