const { Movie } = require('../models');

const movieData = [
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        cast:'Marlon Brando, Al Pacino, James Caan',
        movie_id: 1,
    },
    {
        title: 'Star Wars: Epsiode IV A New Hope',
        director:'George Lucas',
        cast:'Mark Hamill, Carrie Fisher, Harrison Ford',
        movie_id: 2,
    },
    {
        title: 'The Curious Case of Benjamin Button',
        director:'David Fincher',
        cast:'Brad Pitt, Cate Blanchett, Teraji P. Henson',
        movie_id: 3,
    },
    {
        title: 'The Wolf of Wall Street',
        director:'Martin Scorsese',
        cast: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie',
        movie_id: 4,
    },
    {
        title: 'Catch Me If You Can',
        director:'Steven Spielberg',
        cast:'Leonardo DiCaprio, Tom Hanks, Christopher Walken',
        movie_id: 5,
    },
    {
        title: 'Toy Story',
        director:'John Lasseter',
        cast:'Tom Hanks, Tim Allen, Don Rickles',
        movie_id: 6,
    },
    {
        title: 'Avengers: End Game',
        director:'Anthony Russo',
        cast:'Robert Downey Jr., Chris Evans, Chris Hemsworth, Scarlet Johansson',
        movie_id: 7,
    },
    {
        title: 'Interstellar',
        director:'Christopher Nolan',
        cast:'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        movie_id: 8,
    },
    {
        title: 'Shawshank Redemption',
        director:'Frank Darabont',
        cast:'Tim Robbins, Morgan Freeman, Bob Gunton',
        movie_id: 9,
    },
    {
        title: 'Ford V Ferrari',
        director:'James Mangold',
        cast:'Christian Bale, Matt Damon, Caitriona Balfe',
        movie_id: 10,
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;