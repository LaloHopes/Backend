// models/Cupon.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cupon = sequelize.define('Cupon', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,  // El código del cupón es obligatorio
    unique: true       // Asegurarse de que el código sea único
  },
  descuento: {
    type: DataTypes.DECIMAL(5, 2),  // Descuento en porcentaje o en cantidad monetaria
    allowNull: false,  // El descuento es obligatorio
  },
  fecha_expiracion: {
    type: DataTypes.DATE,
    allowNull: false,  // La fecha de expiración es obligatoria
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,  // Indica si el cupón está activo
  }
}, {
  timestamps: false  // Omitir la creación automática de createdAt y updatedAt
});

module.exports = Cupon;
