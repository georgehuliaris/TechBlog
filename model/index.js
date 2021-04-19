
//dont forget to change items to match your project 
const User = require('./User');
const Project = require('./Blogpost');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost };