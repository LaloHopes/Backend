// models/DetalleCompra.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const DetalleCompra = sequelize.define('DetalleCompra', {
  idmovie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Movies', // Nombre de la tabla de películas en la base de datos
      key: 'id'
    }
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false, // Precio de la película
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false, // Cantidad de películas compradas
  },
  idcompra: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Compras', // Nombre de la tabla de compras en la base de datos
      key: 'id'
    }
  }
}, {
  timestamps: false  // Omitir la creación automática de createdAt y updatedAt
});

module.exports = DetalleCompra;
