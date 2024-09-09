// models/Contacto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Contacto = sequelize.define('Contacto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false, // El nombre es obligatorio
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // El email es obligatorio
  },
  comentarios: {
    type: DataTypes.STRING,
    allowNull: false, // El comentario es obligatorio
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false, // La fecha es obligatoria
  }
}, {
  timestamps: false  // Omitir la creación automática de createdAt y updatedAt
});

module.exports = Contacto;
