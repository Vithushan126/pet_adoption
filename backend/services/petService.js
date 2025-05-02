const mongoose = require("mongoose");
const Pet = require("../models/petModel");
const { calculateMood, updatePetMoods } = require("../utils/moodLogic");

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
};

exports.createPet = async (petData) => {
  //   isValidObjectId(id);
  return await Pet.create(petData);
};

exports.getAllPets = async () => {
  const pets = await Pet.find();
  return updatePetMoods(pets);
};

exports.getPetById = async (id) => {
  isValidObjectId(id);
  const pet = await Pet.findById(id);
  if (!pet) return null;
  return {
    ...pet.toObject(),
    mood: calculateMood(pet),
  };
};

exports.updatePetById = async (id, updateData) => {
  isValidObjectId(id);
  const pet = await Pet.findByIdAndUpdate(id, updateData, { new: true });
  if (!pet) return null;

  const mood = calculateMood(pet);

  pet.mood = mood;
  await pet.save();

  return pet.toObject();
};

exports.adoptPetById = async (id, adopted = false) => {
  isValidObjectId(id);

  const pet = await Pet.findById(id);
  if (!pet) {
    throw new Error("Pet not found");
  }

  pet.adopted = adopted;
  pet.adoption_date = adopted ? new Date() : null;

  pet.mood = calculateMood(pet);

  await pet.save();

  return pet;
};

exports.deletePetById = async (id) => {
  isValidObjectId(id);
  return await Pet.findByIdAndDelete(id);
};
