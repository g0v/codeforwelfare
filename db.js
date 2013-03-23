var config = require('./config');
var Sequelize = require("sequelize");
module.exports = new Sequelize(config.db.name, config.db.user, config.db.pass, {
  "host": config.db.host
});
