const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Webnovel = require('./webnovel.model');


const Chapter = sequelize.define('Chapter', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});


Chapter.belongsTo(Webnovel, { foreignKey: 'webnovelId' });
Webnovel.hasMany(Chapter, { foreignKey: 'webnovelId' });


module.exports = Chapter;
