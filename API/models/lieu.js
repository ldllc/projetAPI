const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");
const Event = require("./event");

class Lieu extends Model {}

Lieu.init(
    {
        idLieu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    },
    {
        sequelize: connection,
        modelName: 'Lieu',
    }
);

Lieu.belongsTo(Event, {foreingkey: "idLieu"});
module.exports = Lieu;