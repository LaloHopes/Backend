// models/Movie.js (extendido)
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Movie = sequelize.define('Movie', {
  nombre: DataTypes.STRING,
  idgenero: DataTypes.INTEGER,
  descripcion: DataTypes.STRING,
  idclasificacion: DataTypes.INTEGER,
  p_movie: DataTypes.INTEGER,
  foto: DataTypes.STRING,
  precio_regular: {
    type: DataTypes.DECIMAL(10, 2), // Precio estándar de la película
    allowNull: false,
  },
  precio_oferta: {
    type: DataTypes.DECIMAL(10, 2), // Precio con oferta
    allowNull: true, // Puede ser opcional si no está en oferta
  },
  fecha_inicio_oferta: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fecha_fin_oferta: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  en_oferta: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Si la película está en oferta o no
  }
}, {
  timestamps: false
});

module.exports = Movie;
