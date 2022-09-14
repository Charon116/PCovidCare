require('dotenv').config();
let express = require('express');
let Sequelize = require('sequelize');
let session = require('express-session');


// initalize sequelize with session store
let SequelizeStore = require('connect-session-sequelize')(session.Store);

let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        //storage: "./session.mysql",
        logging: false,
        
        dialectOptions: {
            ssl : {
                require: true,
                rejectUnauthorized: false
            }
        },
        operatorsAliases: 0,
        timezone: "+07:00"
    }

);

let connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connect successfully");
    }catch(error){
        console.log("Connect failure", error);
    }
}

let sessionStore = new SequelizeStore({
    db: sequelize
});

let configSession = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "secret",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie : { httpOnly: false, secure : false, maxAge : (24 * 60 * 60 * 1000)} // 1day
    }))
};

sessionStore.sync();

module.exports = {
    configSession: configSession
};
