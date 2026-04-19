const { DietPlan, User } = require("../models");

exports.generateDiet = async (req, res) => {
  try {
    const {
      title,
      goal,
      plan,
      userId
    } = req.body;

    if (!title || !goal || !plan || !userId) {
      return res.status(400).json({
        message: "Please fill all required fields"
      });
    }

    const newDiet = await DietPlan.create({
      title,
      goal,
      plan,
      userId
    });

    res.status(201).json(newDiet);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.getDiets = async (req, res) => {
  try {
    const diets = await DietPlan.findAll({
      include: [
        {
          model: User,
          as: "user", 
          attributes: ["id", "name", "email"]
        }
      ]
    });

    res.json(diets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.createDietPlan = async (req, res) => {
  try {
    const { planData, userId } = req.body;

    if (!planData || !userId) {
      return res.status(400).json({
        message: "Missing data"
      });
    }

    const saved = await DietPlan.create({
      plan: JSON.stringify(planData),
      userId
    });

    res.json({
      message: "Diet plan saved successfully",
      saved
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateDiet = async (req, res) => {
  try {
    const { id } = req.params;

    const diet = await DietPlan.findByPk(id);

    if (!diet) {
      return res.status(404).json({ message: "Diet not found" });
    }

    await diet.update(req.body);

    res.json({
      message: "Diet updated successfully",
      diet
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteDiet = async (req, res) => {
  try {
    const { id } = req.params;

    const diet = await DietPlan.findByPk(id);

    if (!diet) {
      return res.status(404).json({ message: "Diet not found" });
    }

    await diet.destroy();

    res.json({
      message: "Diet deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
