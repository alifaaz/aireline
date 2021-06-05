'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Users,{foreignKey:"user_id"});
      // this.belongsTo(models.Flights,{foreignKey:"flight_id"});

    }
  };
  Booking.init({
    user_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};