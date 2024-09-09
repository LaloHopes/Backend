// models/Pedido.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de importar la configuración de Sequelize
const User = require('./User'); // Importa el modelo de Usuario
const Movie = require('./Movie'); // Importa el modelo de Película

const Pedido = sequelize.define('Pedido', {
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,  // Define la relación con el modelo User
      key: 'id'
    },
    validate: {
      notNull: {
        msg: "El ID de usuario es obligatorio"
      }
    }
  },
  idmovie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Movie,  // Define la relación con el modelo Movie
      key: 'id'
    },
    validate: {
      notNull: {
        msg: "El ID de película es obligatorio"
      }
    }
  }
}, {
  timestamps: false // Desactiva los timestamps si no son necesarios
});

// Establecer relaciones entre modelos
Pedido.belongsTo(User, { foreignKey: 'iduser' });
Pedido.belongsTo(Movie, { foreignKey: 'idmovie' });

module.exports = Pedido;
