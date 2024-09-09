const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Genero = sequelize.define('Genero', {
  nomgenero: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "El nombre del género es obligatorio"
      }
    }
  }
}, {
  timestamps: false  // Si no necesitas los timestamps puedes desactivarlos
});

module.exports = Genero;
