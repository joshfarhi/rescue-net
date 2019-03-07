const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  pet_name: {
    type: String,
    required: true
  },
  pet_breed: {
    type: String,
    required: true
  },
  pet_weight: {
    type: String,
    required: true
  },
  pet_sex: {
    type: String,
    default: true
  },
  pet_desc: {
    type: String,
    required: true
  }
});

const Animals = mongoose.model('animals', animalSchema);

module.exports = Animals;