import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME || "bdcar",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || '1234',
    {
        host:process.env.DB_HOST || "localhost",
        dialect:"mysql",
        port:process.env.DB_PORT || '3306',
        pool:{
            max:5,
            min:0,
            require: 30000,
            idle: 10000
        }
    }
);
sequelize.authenticate()
    .then(()=>{
        console.log('successfully')
    })
    .catch(error=> console.error('database:',error))
