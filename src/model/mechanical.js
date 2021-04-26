import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Mechanical = sequelize.define('mechanical', {
        idmechanical: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Mechanical;
