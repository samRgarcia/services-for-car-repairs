import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Accepted_works = sequelize.define('accepted_works', {
        idaccepted_works: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        total_amount: {
            type: Sequelize.STRING,
        },
        client_idclient: {
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


export default Accepted_works;
