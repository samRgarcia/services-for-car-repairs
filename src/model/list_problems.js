import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const List_problems = sequelize.define('list_problems', {
        idlist_problems: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING,
        },
        mechanical_problems_idmechanical_problems: {
            type: Sequelize.INTEGER
        },
        progress: {
            type: Sequelize.STRING
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default List_problems;
