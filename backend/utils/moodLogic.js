const moment = require("moment");

const calculateMood = (pet) => {
  if (pet.adopted) return "Happy";

  const createdAt = moment(pet.createdAt);
  const now = moment();
  const daysInSystem = now.diff(createdAt, "days");

  if (daysInSystem < 1) return "Happy";
  if (daysInSystem <= 3) return "Excited";
  return "Sad";
};

const updatePetMoods = async (pets) => {
  const updatedPets = await Promise.all(
    pets.map(async (pet) => {
      const mood = calculateMood(pet);

      if (pet.mood !== mood) {
        pet.mood = mood;
        if (typeof pet.save === "function") {
          await pet.save();
        }
      }

      return typeof pet.toObject === "function" ? pet.toObject() : { ...pet };
    })
  );

  return updatedPets;
};

module.exports = {
  calculateMood,
  updatePetMoods,
};
