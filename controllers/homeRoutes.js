const router = require('express').Router();
const { User, Movie, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      include: [
        {
          model: Review,
          attributes: ['review_id', 'movie_id', 'comment', 'score'],
        },
      ],
    });

    const movies = movieData.map((movie) =>
      movie.get({ plain: true })
    );
    res.render('homepage', {
      movies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: Movie,
          attributes: [
            'movie_id',
            'title',
            'director',
            'cast',
            'bark_score',
            'filename',
          ],
        },
      ],
    });
    // Get all reviews of this movie
    const reviewData = await Review.findAll({
      where: {
        movie_id: movieData.movie_id
      },
      include:[
        {
          model: Review,
          attributes: [
            'comment',
            'score'
          ]
        }]
    });
    const movie = movieData.get({ plain: true });
    const reviews = reviewData.get({ plain:true });
    res.render('movie', { movie, reviews, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/review/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id);

    const review = reviewData.get({ plain: true });
    res.render('review', { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Review }],
      });
      const user = userData.get({ plain: true });
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/movie', async (req, res) => {
  res.render('allmovie');
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
});
  

module.exports = router;
  