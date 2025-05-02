const { body, validationResult } = require("express-validator");

// Validation rules for creating/updating a pet
const validatePetRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("species").notEmpty().withMessage("Species is required"),
  body("age").isNumeric().withMessage("Age must be a number"),
  body("personality").optional().isString(),
  body("mood").optional().isString(),
  body("adopted").optional().isBoolean(),
];

// Middleware to handle validation errors
const validatePet = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};

module.exports = {
  validatePetRules,
  validatePet,
};
