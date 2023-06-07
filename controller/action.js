import express from 'express';
import Movie from '../models/movie.js';
import Chair from '../models/chair.js';
import { where } from 'sequelize';

const router=express.Router();

router.get('/homepage',async(req,res)=>{
    Movie.findAll()
    .then(movies=>{
    res.render('homepage',{
        pageTitle:'TCinemaB',
        movies:movies
      })
    })
      .catch(error=>{
        res.render('homepage',{
          pageTitle:'TCinemaB',
        })
      })
    })

export default router;