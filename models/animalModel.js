let mongoose = require ('mongoose')

let animalSchema = new mongoose.Schema({
    text: String,
    magic: String
});

let Animal = mongoose.model('animal', animalSchema)

module.exports = Animal;