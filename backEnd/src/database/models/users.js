"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Fixed_income, {
        as: "fixedIncome",
        foreignKey: "user_id",
      });
      User.hasMany(models.Income_expenses, {
        as: "incomeExpense",
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      confirmPassword: DataTypes.STRING,
      nickName: DataTypes.STRING,
      avatar: DataTypes.STRING,
      active: DataTypes.INTEGER,
      admin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
