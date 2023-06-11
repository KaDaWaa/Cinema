import Sequelize from "sequelize";
import database from './database.js';

const Movie = database.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  movieName: Sequelize.STRING,
  movieImage: Sequelize.STRING,
  movieLength: Sequelize.INTEGER,
  movieDescription:Sequelize.TEXT,
  movieAuthor: Sequelize.STRING,
  ageRestriction: Sequelize.INTEGER,
  genre: Sequelize.STRING,
  chairAmount: Sequelize.INTEGER,
  chairArray: {
    type: Sequelize.TEXT,
    defaultValue: '[]',
    get() {
      const value = this.getDataValue('chairArray');
      return JSON.parse(value);
    },
    set(value) {
      this.setDataValue('chairArray', JSON.stringify(value));
    }
  }
});

export default Movie;
