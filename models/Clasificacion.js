// models/Clasificacion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de que la ruta de importación sea correcta

const Clasificacion = sequelize.define('Clasificacion', {
  nomclasificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "El nombre de clasificación es obligatorio"
      }
    }
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "La descripción es obligatoria"
      }
    }
  }
}, {
  // Opciones adicionales
  timestamps: false // Desactiva los timestamps si no los necesitas
});

module.exports = Clasificacion;
