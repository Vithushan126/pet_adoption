const petService = require("../services/petService");
const { updatePetMoods } = require("../utils/moodLogic");

//create a pet
exports.createPets = async (req, res) => {
  try {
    const pet = await petService.createPet(req.body);
    res.status(201).json({
      success: true,
      message: "Pet created successfully.",
      data: pet,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get all pets
exports.getPets = async (req, res) => {
  try {
    const pets = await petService.getAllPets();
    res.status(200).json({ success: true, data: pets });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get a pet by id
exports.getPet = async (req, res) => {
  try {
    const pet = await petService.getPetById(req.params.id);
    if (!pet)
      return res.status(404).json({ success: false, message: "Pet not found" });
    res.status(200).json({ success: true, data: pet });
  } catch (error) {
    const status = error.message === "Invalid ID" ? 400 : 500;
    res.status(status).json({ success: false, message: error.message });
  }
};

// update a pet by id
exports.updatePet = async (req, res) => {
  try {
    const updatedPet = await petService.updatePetById(req.params.id, req.body);
    if (!updatedPet) return res.status(404).json({ message: "Pet not found" });
    res.status(200).json({
      success: true,
      message: "Pet updted successfully.",
      data: updatedPet,
    });
  } catch (error) {
    const status = error.message === "Invalid ID" ? 400 : 500;
    res.status(status).json({ success: false, message: error.message });
  }
};

// adopt a pet by id
exports.adoptPet = async (req, res) => {
  try {
    const { adopted } = req.body;

    const adoptedPet = await petService.adoptPetById(req.params.id, adopted);
    if (!adoptedPet) {
      return res.status(404).json({ success: false, message: "Pet not found" });
    }

    res.status(200).json({ success: true, data: adoptedPet });
  } catch (error) {
    const status = error.message === "Invalid ID" ? 400 : 500;
    res.status(status).json({ success: false, message: error.message });
  }
};

// Delete pet by ID
exports.deletePet = async (req, res) => {
  try {
    const deletedPet = await petService.deletePetById(req.params.id);
    if (!deletedPet)
      return res.status(404).json({ success: false, message: "Pet not found" });
    res
      .status(200)
      .json({ success: true, message: "Pet deleted successfully" });
  } catch (error) {
    const status = error.message === "Invalid ID" ? 400 : 500;
    res.status(status).json({ success: false, message: error.message });
  }
};

// Filter pets by mood
exports.filterPetsByMood = async (req, res) => {
  try {
    const { mood } = req.query;

    const pets = await petService.getAllPets();

    const petsWithMood = await updatePetMoods(pets);

    if (!Array.isArray(petsWithMood)) {
      return res.status(500).json({
        success: false,
        message: "Unexpected error: petsWithMood is not an array",
      });
    }

    //   const normalizedMood = mood?.toLowerCase();

    //   const validMoods = {
    //     happy: "Happy",
    //     excited: "Excited",
    //     sad: "Sad",
    //   };

    //   if (!validMoods[normalizedMood]) {
    //     return res.status(400).json({ message: "Invalid mood query parameter" });
    //   }

    // const allPets = await petService.getAllPets();

    // const petsWithMood = updatePetMoods(allPets);

    const filteredPets = petsWithMood.filter(
      (pet) => pet.mood.toLowerCase() === mood.toLowerCase()
    );

    res.status(200).json({ success: true, data: filteredPets });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to filter pets",
    });
  }
};
