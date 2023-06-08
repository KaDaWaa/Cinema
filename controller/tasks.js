import express from 'express';
import Movie from '../models/movie.js';
import Chair from '../models/chair.js';
const router=express.Router();

router.post('/add_movie',async(req,res)=>{
    const{id,movieName,movieLength,movieAuthor,ageRestricion,genre,chairAmount}=req.body;
    Movie.create({
        id:id,
        movieName:movieName,
        movieImage:movieImage,
        movieLength:movieLength,
        movieAuthor:movieAuthor,
        ageRestricion:ageRestricion,
        genre:genre,
        chairAmount:chairAmount
    }).then(result=>{
        res.redirect('/dashboard')
    })
    .catch(error=>{
        console.log(error);
        res.redirect('/homepage')
    })

})
export default router;