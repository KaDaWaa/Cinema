import express from 'express';
import Movie from '../models/movie.js';
import { where } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/homepage', async (req, res) => {
  Movie.findAll()
    .then(movies => {
      res.render('homepage', {
        pageTitle: 'TCinemaB',
        movies: movies
      })
    })
    .catch(error => {
      res.render('homepage', {
        pageTitle: 'TCinemaB',
      })
    })
})

router.get('/loginpage', async (req, res) => {
  const message = req.query.message;
  try {
    res.render('login', {
      message: message,
      pageTitle: 'Admin Login'
    });
  } catch (error) {
    res.render('homepage', {
      pageTitle: 'TCinemaB',
    });
  }
})

router.get('/dashboard', async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
    Movie.findAll()
      .then(movies => {
        res.render('dashboard', {
          pageTitle: 'Dashboard',
          movies: movies
        })
      })
      .catch(error => {
        res.render('homepage', {
          pageTitle: 'TCinemaB',
        })
      })
  }
})
router.get('/movie/:id', async (req, res) => {
  const id = req.params.id;

  Movie.findByPk(id)
    .then(movie => {
      res.render('movie', {
        pageTitle: movie.movieName,
        movie: movie
      })
    })
    .catch(error => {
      res.render('homepage', {
        pageTitle: 'TCinemaB'
      })
    })
})

router.get('/edit_movie/:id', async (req, res) => {
  const id = req.params.id;

  Movie.findByPk(id)
    .then(movie => {
      res.render('movieEdit', {
        pageTitle: 'Edit ' + movie.movieName,
        movie: movie
      })
    })
    .catch(error => {
      res.render('dashboard', {
        pageTitle: 'Welocme to Admin',
      })
    })

})
export default router;