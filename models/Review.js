const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'movie_id'
      }
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
