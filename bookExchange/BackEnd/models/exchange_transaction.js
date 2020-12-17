const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model - owner

const exchange_transaction = sequelize.define('exchange_transaction', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  owner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  borrower_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  is_borrowed:{
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '0',
  },
  book_id:{
    type: Sequelize.STRING,
    allowNull: false,
  }

},
  {timestamps:false});

module.exports = exchange_transaction;
