'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Review',
  });
  return Review;
};