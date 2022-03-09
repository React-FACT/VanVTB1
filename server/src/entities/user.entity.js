const {BaseEntity} = require('./bases/base.entity');
const { Sequelize, DataTypes } = require('sequelize');

class User extends BaseEntity {
    Fullname = { type: DataTypes.STRING };
    Email = { type: DataTypes.STRING };
    Password = { type: DataTypes.STRING };
    Dob = { type: DataTypes.DATE };
    Phone = { type: DataTypes.STRING };
    Address = { type: DataTypes.STRING };
    Firstlogin = { type: DataTypes.DATE };
    Lastlogin = { type: DataTypes.DATE };
    Status = { type: DataTypes.BOOLEAN };
    RoleID = { type: DataTypes.INTEGER };
}
module.exports = {User}