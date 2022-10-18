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

// Maybe delete the delete, put, and post movie routes? Suppose movies are added by our database and users do not have the 
// Authorization to alter movie list
router.post('/', withAuth, async (req, res) => {
    try{
        const movieData = await Movie.create(req.body, {
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(movieData);
    } catch(err) {
        res.status(400).json(err);
    }
});


router.put('/:id', withAuth, async (req, res) => {
    try {
        const movieData = await Movie.update(
            {
                where: {
                    movie_id: req.params.movie_id,
                }
            },
            {
                title: req.body.title,
                body: req.body.body,
            }
        );
        if (!movieData) {
            res.status(404).json({message: 'No movie found with this id!'});
        }
        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const movieData = await Movie.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if(!movieData) {
            res.status(404).json({message: 'No movie found with this id!'});
            return;
        }
        res.status(200).json(movieData);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;