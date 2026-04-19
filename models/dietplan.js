"use strict";

module.exports = (sequelize, DataTypes) => {
  const DietPlan = sequelize.define("DietPlan", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    goal: {
      type: DataTypes.STRING,
      allowNull: false
    },

    plan: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true 
  });

  DietPlan.associate = function(models) {
    DietPlan.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user"
    });
  };

  return DietPlan;
};
