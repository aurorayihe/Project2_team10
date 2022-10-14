const router = require('express').Router();
const { Movie, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const movieData = await Movie.findAll({
            attributes: ["movie_id", "title", "director", "cast"],
            include: [
                {
                    model: Review,
                    as: "reviews",
                    attributes: ["id", "review_text", "user_name"],
                }
            ],
        });
        res.status(200).json(movieData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const movieData = await Movie.findOne({
            where: {
                id: req.params.id
            },
            attributes: ["movie_id", "title", "director", "cast"],
            include: [
                {
                    model: Review,
                    as: "reviews",
                    attributes: ["id", "review_text", "user_name"],
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
                    id: req.params.id,
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