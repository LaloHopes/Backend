// models/OfertaCategoria.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const OfertaCategoria = sequelize.define('OfertaCategoria', {
  idgenero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Generos', // Tabla de géneros
      key: 'id'
    }
  },
  descuento: {
    type: DataTypes.DECIMAL(5, 2), // Descuento aplicado al género
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  timestamps: false
});

module.exports = OfertaCategoria;
