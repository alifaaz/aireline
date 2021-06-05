'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.City,{
      //   foreignKey:'city_id',
      //   as:"city"
      // });
      this.hasMany(models.Flights,{
        as:"flightss"
      });
    
    }
  };
  Airport.init({
    city_id: DataTypes.INTEGER,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
  });

  return Airport;
};