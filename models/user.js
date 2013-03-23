'use strict';

var db = require('../db');
var Sequelize = require("sequelize");

var User = db.define('User', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    unique: true
  },
  password: {}
});

module.exports = User;
