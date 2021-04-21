import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const User = sequelize.define('user', {
        iduser: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        rol: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING
        },
        user: {
            type: Sequelize.STRING
        },
        idt_type_user: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default User;
