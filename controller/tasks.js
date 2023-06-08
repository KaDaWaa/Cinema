import express from 'express';
import Movie from '../models/movie.js';
import Chair from '../models/chair.js';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD)
        res.redirect(`/dashboard?username=${username}&password=${password}`);
    else
        res.redirect("/loginpage?message=Wrong email or password!")

});
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