const Character = require("../models/Character");

// Defining methods for the controller
module.exports = {
    findAll: function(req, res) {
        Character.find({userID: req.params.userid})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        Character.findOne({userID: req.params.userid, _id: req.params.charid})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        Character.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        Character.findOneAndUpdate({userID: req.params.userid, _id: req.params.charid}, req.body, {new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // remove: function(req, res) {
    //     Character.findOne({userID: req.params.userID, charID: req.params.charID})
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};