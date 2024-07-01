const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM,
    values: ['Autor', 'Leitor'],
    allowNull: false
  }
});



module.exports = User;
