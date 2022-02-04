const { Model, DataTypes } =require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true,
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Traveller',
    },
);

module.exports = Traveller;