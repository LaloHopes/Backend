const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idrol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false  // Omitir la creación automática de campos `createdAt` y `updatedAt`
});

module.exports = User;
