const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  slug: String,
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
