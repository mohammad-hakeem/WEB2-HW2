const express = require("express");
const router = express.Router();

const {
  generateDiet,
  getDiets,
  createDietPlan,
  updateDiet,
  deleteDiet
} = require("../controllers/dietController");

// CREATE
router.post("/", generateDiet);

// READ
router.get("/", getDiets);

// SAVE (اختياري)
router.post("/save", createDietPlan);

// UPDATE
router.put("/:id", updateDiet);

// DELETE
router.delete("/:id", deleteDiet);

module.exports = router;