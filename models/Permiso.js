// models/Permiso.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Importa la configuración de Sequelize

const Permiso = sequelize.define('Permiso', {
  nompermiso: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "El nombre es obligatorio"
      },
      notEmpty: {
        msg: "El nombre no puede estar vacío"
      }
    }
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "La clave es obligatoria"
      },
      notEmpty: {
        msg: "La clave no puede estar vacía"
      }
    }
  }
}, {
  timestamps: false // Desactiva los timestamps si no son necesarios
});

module.exports = Permiso;
