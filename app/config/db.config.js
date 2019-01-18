const host = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(host.database, host.username, host.password, {
  host: host.host,
  dialect: host.dialect,
  operatorsAliases: false,

  pool: {
    max: host.max,
    min: host.pool.min,
    acquire: host.pool.acquire,
    idle: host.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

module.exports = db;
