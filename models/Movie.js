const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,   
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directors: {
            type: DataTypes.
        },
        bark_score: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'project',
    }
);
  
module.exports = Chat;