'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
      this.belongsTo(models.Airport,{
        foreignKey:'origin',
      });
      this.belongsTo(models.Airport,{
        foreignKey:'destination',
      
      });
      // this.belongsToMany(models.Users,{
      //   through:"Booking",
      //   foreignKey:"flight_id",
      //   as:"flights_bookings"
      // })

    }
  };
  Flights.init({
    origin: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    boarding_time: DataTypes.DATE,
    distance: DataTypes.FLOAT,
    attendance_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};