const {Model, DataType} = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcrypt");

class Event extends Model {}

Event.init
({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    typeOfEvent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['sport', 'fashion', 'music', 'business','education', 'politcs']]
        },
    },



})

module.exports = Event;




