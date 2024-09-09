// models/RolxPermiso.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Importa la configuración de Sequelize
const Roles = require('./Roles'); // Importa el modelo de Rol
const Permiso = require('./Permiso'); // Importa el modelo de Permiso

const RolxPermiso = sequelize.define('RolxPermiso', {
  idrol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Roles,  // Define la relación con el modelo Rol
      key: 'id'
    },
    validate: {
      notNull: {
        msg: "El ID del rol es obligatorio"
      }
    }
  },
  idpermiso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Permiso,  // Define la relación con el modelo Permiso
      key: 'id'
    },
    validate: {
      notNull: {
        msg: "El ID del permiso es obligatorio"
      }
    }
  }
}, {
  timestamps: false // Desactiva los timestamps si no son necesarios
});

// Establecer relaciones entre modelos
RolxPermiso.belongsTo(Roles, { foreignKey: 'idrol' });
RolxPermiso.belongsTo(Permiso, { foreignKey: 'idpermiso' });

module.exports = RolxPermiso;
