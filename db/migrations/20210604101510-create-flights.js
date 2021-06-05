'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Airports',
          key: 'id'
        },
      },
      destination: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Airports',
          key: 'id'
        },
      },
      duration: {
        type: Sequelize.INTEGER
      },
      boarding_time: {
        type: Sequelize.DATE
      },
      distance: {
        type: Sequelize.FLOAT
      },
      attendance_time: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
          }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flights');
  }
};