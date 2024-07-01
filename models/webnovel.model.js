const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./user.model'); // 


const Webnovel = sequelize.define('Webnovel', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Definindo as associações
Webnovel.belongsTo(User, { foreignKey: 'userId'});
User.hasMany(Webnovel, { foreignKey: 'userId' });



module.exports = Webnovel;
