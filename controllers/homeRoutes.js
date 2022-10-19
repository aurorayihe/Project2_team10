const router = require('express').Router();
const { User, Movie, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id);
    // Get all reviews of this movie
    console.log("get method called!")
    const movie = movieData.get({ plain: true });
    const reviewData = await Review.findAll({
      where: {
        movie_id: req.params.id
      },
    });
    const reviews = reviewData.map((ref) => ref.get({ plain: true }));
    res.render('movie', { movie, reviews, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// router.get('/movie/:id'), async (req, res) => {
//   try {
//     const movieData = await Movie.findByPk(req.params.id);
//     const thismovie = movieData.get({ plain: true});
//     res.render('movie', {thismovie, logged_in: req.session.logged_in});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// };

router.get('/review/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id);

    const review = reviewData.get({ plain: true });
    res.render('review', { review, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        user_id:1,
      }
    });
    const user = userData.map((ref) => ref.get({ plain: true }));
    console.log(user);

    const reviewData = await Review.findAll({
      where: {
        user_id: 1,
      },
    });
    const reviews = reviewData.map((ref) => ref.get({ plain: true }));
    console.log("are you here?");
    res.render('profile', { ...user, reviews, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
    // try {
    //   const userData = await User.findByPk(req.session.user_id, {
    //     attributes: { exclude: ['password'] },
    //     include: [{ model: Review }],
    //   });
    //   const user = userData.get({ plain: true });
    //   res.render('profile', {
    //     ...user,
    //     logged_in: true
    //   });
    // } catch (err) {
    //   res.status(500).json(err);
    // }
});

router.get('/allmovie', async (req, res) => {
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
    res.render('allmovie', {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/review', (req, res) => {
  res.render('review');
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});
  

module.exports = router;
  