'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
 Users.init({
    user_id: DataTypes.TEXT,
    user_name: DataTypes.TEXT,
    user_email: DataTypes.TEXT,
    user_password: DataTypes.TEXT,
    user_image: DataTypes.BLOB,
    total_orders: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};