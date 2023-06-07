import Sequelize from "sequelize";
import database from './database.js';

const Chair=database.define('chair',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    movieId:Sequelize.INTEGER,
    isTaken:Sequelize.BOOLEAN
});

export default Chair;