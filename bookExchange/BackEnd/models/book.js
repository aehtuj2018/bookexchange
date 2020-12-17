const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model -book

const book = sequelize.define('book', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publish_date:{
    type: Sequelize.INTEGER,
    allowNull: false,
  }
  ,
  image_source: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
  ,
  abstract: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  owner_id:{
    type: Sequelize.INTEGER,
    allowNull: true,
  }

},
  {timestamps:false},{freezeTableName: true});

module.exports = book;

