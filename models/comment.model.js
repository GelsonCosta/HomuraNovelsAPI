const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Chapter = require('./chapter.model'); // Assumindo que há um modelo Chapter definido em outro arquivo

const Comment = sequelize.define('Comment', {
  nome: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Definindo as associações
Comment.belongsTo(Chapter, { foreignKey: 'chapterId' });
Chapter.hasMany(Comment, { foreignKey: 'chapterId' });

module.exports = Comment;
