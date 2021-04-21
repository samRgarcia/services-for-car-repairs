import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Rejected_jobs = sequelize.define('rejected_jobs', {
        idrejected_jobs: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        descriptions: {
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


export default Rejected_jobs;
