const { Review } = require('../models');

const reviewData = [
    {
      name: 'Gus',
      email: 'gus@hotmail.com',
      review_text: 'This movie is a fun watch!',
      id: 1,
    },
    {
      name: 'Daisy',
      email: 'Daisy@gmail.com',
      review_text: 'My favorite movie!',
      id: 2,
    },
    {
      name: 'Jenny',
      email: 'Jenny@aol.com',
      review_text: 'I did not like this movie.',
      id: 3,

    },
    {
        name: 'Kevin',
        email: 'Kevin@yahoo.com',
        review_text: 'This movie was alright.',
        id: 4,
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;