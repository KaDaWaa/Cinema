import express from 'express';
import Movie from '../models/movie.js';
import Chair from '../models/chair.js';
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
});

router.get('/dashboard', async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
    res.render('dashboard', {
      pageTitle: 'Dashboard'
    });
  } else
    res.redirect('/homepage');

})

// router.get('/dashboard',async(req,res)=>{
//   Movie.findAll()
//   .then(movies=>{
//     res.render('dashboard',{
//       pageTitle:'Dashboard',
//       movies:movies
//     })
//   })
//   .catch(error=>{
//     res.render('homepage',{
//       pageTitle:'TCinemaB',
//     })
//   })
// })

export default router;