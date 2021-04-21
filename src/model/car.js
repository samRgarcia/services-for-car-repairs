import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Cars = sequelize.define('cars', {
        idcars: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        model: {
            type: Sequelize.STRING,
        },
        license_place: {
            type: Sequelize.STRING,
        },
        client_idclient: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Cars;
