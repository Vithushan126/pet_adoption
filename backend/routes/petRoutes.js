const express = require("express");
const {
  createPets,
  getPets,
  getPet,
  updatePet,
  adoptPet,
  deletePet,
  filterPetsByMood,
} = require("../controllers/petController");
const { validatePetRules, validatePet } = require("../middlewares/validatePet");
const router = express.Router();

router.route("/pets/filter").get(filterPetsByMood);

router.route("/pets").post(createPets).get(getPets);

router
  .route("/pets/:id")
  .get(getPet)
  .put(validatePetRules, validatePet, updatePet)
  .patch(adoptPet)
  .delete(deletePet);

module.exports = router;
