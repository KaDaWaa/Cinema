import express from 'express';
import Movie from '../models/movie.js';
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
router.post('/delete_movie/:id', async (req, res) => {
  const id = req.params.id;
  Movie.destroy({ where: { id: id } })
    .then(result => {
      res.redirect(`/dashboard?username=rany&password=segev`);
    }).catch(error => {
      console.log(error);
      res.redirect('/homepage');
    });
});


router.post('/add_movie', async (req, res) => {
  const { id, movieName, movieImage, movieLength, movieDescription, movieAuthor, ageRestriction, genre, chairAmount } = req.body;

  const chairArray = Array.from({ length: chairAmount }, () => false);

  Movie.create({
    id: id,
    movieName: movieName,
    movieImage: movieImage,
    movieLength: movieLength,
    movieDescription: movieDescription,
    movieAuthor: movieAuthor,
    ageRestriction: ageRestriction,
    genre: genre,
    chairAmount: chairAmount,
    chairArray: chairArray
  }).then(result => {
    res.redirect(`/dashboard?username=rany&password=segev`);
  }).catch(error => {
    console.log(error);
    res.redirect('/homepage');
  });
})

router.post('/edit_movie/:id', async (req, res) => {
  const id = req.params.id;
  const { movieName, movieImage, movieLength, movieAuthor, ageRestricion, genre, chairAmount } = req.body;
  Movie.update({
    movieName: movieName,
    movieImage: movieImage,
    movieLength: movieLength,
    movieAuthor: movieAuthor,
    ageRestricion: ageRestricion,
    genre: genre,
    chairAmount: chairAmount
  }, { where: { id: id } }).then(result => {
    res.redirect('/dashboard')
  })
    .catch(error => {
      console.log(error);
      res.redirect('/homepage')
    })

})
export default router;