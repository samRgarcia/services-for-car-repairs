import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Mechanic_suggestions = sequelize.define('mechanic_suggestions', {
        idmechanic_suggestions: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        suggestions: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING
        },
        cars_idcars: {
            type: Sequelize.INTEGER
        },
        mechanical_idmechanical: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Mechanic_suggestions;
