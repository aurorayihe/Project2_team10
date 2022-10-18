const { Movie } = require('../models');

const movieData = [
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        cast:'Marlon Brando, Al Pacino, James Caan',
        movie_id: 1,
        bark_score: 95,
        filename: '01-The-Godfather.jpg',

    },
    {
        title: 'Star Wars: Epsiode IV A New Hope',
        director:'George Lucas',
        cast:'Mark Hamill, Carrie Fisher, Harrison Ford',
        movie_id: 2,
        bark_score: 98,
        filename: '02-Star-Wars-ANH.jpg',
    },
    {
        title: 'The Curious Case of Benjamin Button',
        director:'David Fincher',
        cast:'Brad Pitt, Cate Blanchett, Teraji P. Henson',
        movie_id: 3,
        bark_score: 100,
        filename: '03-A-Curious-Case-of-Benjamin-Button.jpg',
    },
    {
        title: 'The Wolf of Wall Street',
        director:'Martin Scorsese',
        cast: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie',
        movie_id: 4,
        bark_score: 96,
        filename: '04-Wolf-of-Wallstreet.jpg',
    },
    {
        title: 'Catch Me If You Can',
        director:'Steven Spielberg',
        cast:'Leonardo DiCaprio, Tom Hanks, Christopher Walken',
        movie_id: 5,
        bark_score: 90,
        filename: '05-Catch-Me-If-You-Can.jpg',
    },
    {
        title: 'Toy Story',
        director:'John Lasseter',
        cast:'Tom Hanks, Tim Allen, Don Rickles',
        movie_id: 6,
        bark_score: 93,
        filename: '06-Toy-Story.jpg',
    },
    {
        title: 'Avengers: End Game',
        director:'Anthony Russo',
        cast:'Robert Downey Jr., Chris Evans, Chris Hemsworth, Scarlet Johansson',
        movie_id: 7,
        bark_score: 88,
        filename: '07-Avengers-End-Game.jpg',
    },
    {
        title: 'Interstellar',
        director:'Christopher Nolan',
        cast:'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        movie_id: 8,
        bark_score: 80,
        filename: '08-Interstellar.jpg',
    },
    {
        title: 'Shawshank Redemption',
        director:'Frank Darabont',
        cast:'Tim Robbins, Morgan Freeman, Bob Gunton',
        movie_id: 9,
        bark_score: 98,
        filename: '09-Shawshank-Redemption.jpg',
    },
    {
        title: 'Ford V Ferrari',
        director:'James Mangold',
        cast:'Christian Bale, Matt Damon, Caitriona Balfe',
        movie_id: 10,
        bark_score: 92,
        filename: '10-Ford-V-Ferrari.jpg',
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;