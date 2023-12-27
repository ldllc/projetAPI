const {Model, DataType} = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcrypt");
const Lieu = require("./Lieu");

class Event extends Model {}

Event.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        idEvent :{

            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },

        typeOfEvent: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            isIn: [['sport', 'fashion', 'music', 'business','education', 'politcs']]
            },
        },

        descriptionEvent : {
            type: DataTypes.TEXTE,
            allowNull: false,
        },

    },

    {
        sequelize: connection,
        modelName: "event"
    }    
);

Event.hasMany(Lieu, {foreignKey:"idLieu"});

module.exports = Event;




