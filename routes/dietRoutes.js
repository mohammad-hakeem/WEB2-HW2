const express = require("express");
const router = express.Router();

const {
  generateDiet,
  getDiets,
  createDietPlan,
  updateDiet,
  deleteDiet
} = require("../controllers/dietController");


router.post("/", generateDiet);


router.get("/", getDiets);


router.post("/save", createDietPlan);


router.put("/:id", updateDiet);


router.delete("/:id", deleteDiet);

module.exports = router;
