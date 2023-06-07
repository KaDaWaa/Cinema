import Sequelize from "sequelize";
import database from './database.js';

const Movie=database.define('movie',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    movieName: Sequelize.STRING,
    movieLength: Sequelize.INTEGER,
    movieAuthor: Sequelize.STRING,
    ageRestricion: Sequelize.INTEGER,
    genre: Sequelize.STRING,
    chairAmount:Sequelize.INTEGER
});

export default Movie;