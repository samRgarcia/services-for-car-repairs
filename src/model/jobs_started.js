import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Jobs_started = sequelize.define('jobs_started', {
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


export default Jobs_started;
