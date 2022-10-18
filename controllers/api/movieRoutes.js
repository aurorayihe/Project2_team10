const router = require('express').Router();
const { Movie, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll({
            attributes: ["movie_id", "title", "director", "cast"],
            include: [
                {
                    model: Review,
                    as: "reviews",
                    attributes: ["review_id", "user_id", "movie_id", "comment", "score"],
                }
            ],
        });
        res.status(200).json(movieData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const movieData = await Movie.findOne({
            where: {
                movie_id: req.params.movie_id
            },
            attributes: ["movie_id", "title", "director", "cast", "bark_score"],
            include: [
                {
                    model: Review,
                    as: "reviews",
                    attributes: ["review_id", "user_id", "movie_id", "comment", "score"],
                }
            ],
        });
        if (!movieData) {
            res.status(404).json({message: 'There is no movie found with this id!'});
        }
        res.status(200).json(movieData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;