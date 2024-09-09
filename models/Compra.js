// models/Compra.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Compra = sequelize.define('Compra', {
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Nombre de la tabla de usuarios en la base de datos
      key: 'id'
    }
  },
  idmovie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Movies', // Nombre de la tabla de películas en la base de datos
      key: 'id'
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false, // Precio total de la compra
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false, // Fecha de la compra
  },
  idpedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pedidos', // Nombre de la tabla de pedidos en la base de datos
      key: 'id'
    }
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false, // Estado de la compra
  }
}, {
  timestamps: false  // Omitir la creación automática de createdAt y updatedAt
});

module.exports = Compra;
