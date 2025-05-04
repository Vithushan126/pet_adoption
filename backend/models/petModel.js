const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet name is required."],
      minlength: [2, "Pet name must be at least 2 characters long."],
      maxlength: [50, "Pet name cannot exceed 50 characters."],
    },
    species: {
      type: String,
      required: [true, "Pet species is required."],
    },
    age: {
      type: Number,
      required: [true, "Pet age is required."],
      min: [0, "Pet age cannot be negative."],
      max: [100, "Pet age seems too high."],
    },
    personality: {
      type: String,
    },
    mood: {
      type: String,
      default: "Happy",
    },
    adopted: {
      type: Boolean,
      default: false,
    },
    adoption_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pet", petSchema);
