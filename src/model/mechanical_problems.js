import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Mechanical_problems = sequelize.define('mechanical_problems', {
        idmechanical_problems: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        descriptions: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING
        },
        cars_idcars: {
            type: Sequelize.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Mechanical_problems;
