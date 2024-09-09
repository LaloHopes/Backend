// models/Oferta.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Oferta = sequelize.define('Oferta', {
  idpelicula: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Movies', // Tabla de películas
      key: 'id'
    }
  },
  descuento: {
    type: DataTypes.DECIMAL(5, 2), // Descuento como porcentaje
    allowNull: true,
  },
  precio_oferta: {
    type: DataTypes.DECIMAL(10, 2), // Precio con descuento
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false, // Inicio de la oferta
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false, // Fin de la oferta
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Indica si la oferta está activa
  }
}, {
  timestamps: false  // Omitir createdAt y updatedAt
});

module.exports = Oferta;
