const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,   
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cast_crew: {
            type: DataTypes.STRING,
            allowNull: false
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
      modelName: 'movie',
    }
);
  
module.exports = Movie;