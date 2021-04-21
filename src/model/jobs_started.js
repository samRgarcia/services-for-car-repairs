import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Idjobs_started = sequelize.define('idjobs_started', {
        idjobs_started: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        advance: {
            type: Sequelize.STRING,
        },
        cars_idcars: {
            type: Sequelize.INTEGER
        },
        mechanical_idmechanical: {
            type: Sequelize.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Idjobs_started;
