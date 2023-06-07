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
export default router;