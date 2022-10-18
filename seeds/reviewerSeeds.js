const { Review } = require('../models');

const reviewData = [
    {
      review_id: 1,
      user_id: 1,
      movie_id: 1, 
      comment: 'This movie was amazing!',
      score: 100,
    },
    {
      review_id: 2,
      user_id: 2,
      movie_id: 2, 
      comment: 'This movie was terrible.',
      score: 10,
    },
    {
      review_id: 3,
      user_id: 3,
      movie_id: 3, 
      comment: 'This movie was fun to watch.',
      score: 75,
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;