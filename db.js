const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a MySQL');
  })
  .catch((error) => {
    console.error('Error de conexión a MySQL:', error);
  });

module.exports = sequelize;
