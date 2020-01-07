// require mongoose
var mongoose = require("mongoose");

// get schema stuff
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    level: {
        type: Number,
        required: true
    },
    stats: [{
        str: Number,
        dex: Number,
        con: Number,
        int: Number,
        wis: Number,
        cha: Number
    }],
    skills: [{
        acrobatics: false,
        animal: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleight: false,
        stealth: false,
        survival: false
    }],
    ac: {
        type: Number,
        required: true
    },
    initiative: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    thp: {
        type: Number
    },
    hitDice: {
        type: String,
        required: true
    },
    attacksSpellcasting: [{
            name: String,
            atk: Number,
            dmgType: String
        },
        {
            name: String,
            atk: Number,
            dmgType: String
        },
        {
            name: String,
            atk: Number,
            dmgType: String
        }
    ],
    money: [{
        platinum: Number,
        gold: Number,
        electrum: Number,
        silver: Number,
        copper: Number
    }],
    inventory: {
        type: String
    },
    characterNotes: [{
        traits: String,
        ideals: String,
        bonds: String,
        flaws: String
    }],
    featsTraits: {
        type: String
    }
});

// variable for exporting the model schema thing
var Character = mongoose.model("Character", CharacterSchema);

// export
module.exports = Character;