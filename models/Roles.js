const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de que este sea el archivo correcto de configuración de Sequelize

const Roles = sequelize.define('Roles', {
  nomrol: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "El nombre del rol es obligatorio"
      }
    }
  }
}, {
  timestamps: false // Desactiva los timestamps si no son necesarios
});

module.exports = Roles;
