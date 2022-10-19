const { Movie } = require('../models');

const movieData = [
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        cast:'Marlon Brando, Al Pacino, James Caan',
        bark_score: 95,
        filename: '01-The-Godfather.jpg',
        
    },
    {
        title: 'Star Wars: Epsiode IV A New Hope',
        director:'George Lucas',
        cast:'Mark Hamill, Carrie Fisher, Harrison Ford',
        bark_score: 98,
        filename: '02-Star-Wars-ANH.jpg',
     
    },
    {
        title: 'The Curious Case of Benjamin Button',
        director:'David Fincher',
        cast:'Brad Pitt, Cate Blanchett, Teraji P. Henson',
        bark_score: 100,
        filename: '03-A-Curious-Case-of-Benjamin-Button.jpg',
    
    },
    {
        title: 'The Wolf of Wall Street',
        director:'Martin Scorsese',
        cast: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie',
        bark_score: 96,
        filename: '04-Wolf-of-Wallstreet.jpg',

    },
    {
        title: 'Catch Me If You Can',
        director:'Steven Spielberg',
        cast:'Leonardo DiCaprio, Tom Hanks, Christopher Walken',
        bark_score: 90,
        filename: '05-Catch-Me-If-You-Can.jpg',
    },
    {
        title: 'Toy Story',
        director:'John Lasseter',
        cast:'Tom Hanks, Tim Allen, Don Rickles',
        bark_score: 93,
        filename: '06-Toy-Story.jpg',
    },
    {
        title: 'Avengers: End Game',
        director:'Anthony Russo',
        cast:'Robert Downey Jr., Chris Evans, Chris Hemsworth, Scarlet Johansson',
        bark_score: 88,
        filename: '07-Avengers-End-Game.jpg',
    },
    {
        title: 'Interstellar',
        director:'Christopher Nolan',
        cast:'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        bark_score: 80,
        filename: '08-Interstellar.jpg',
    },
    {
        title: 'Shawshank Redemption',
        director:'Frank Darabont',
        cast:'Tim Robbins, Morgan Freeman, Bob Gunton',
        bark_score: 98,
        filename: '09-Shawshank-Redemption.jpg',
    },
    {
        title: 'Ford V Ferrari',
        director:'James Mangold',
        cast:'Christian Bale, Matt Damon, Caitriona Balfe',
        bark_score: 92,
        filename: '10-Ford-V-Ferrari.jpg',
    },
     {
       title: 'Minions: The Rise of Gru',
        director:'Kyle Balda',
        cast:'Steve Carell, Taraji P. Henson, Michelle Yeoh',
        bark_score: 80,
        filename: 'minions-the-rise-of-gru.jpeg',
     },
     {
        title: 'Lupin',
         director:'George Kay',
         cast:'Omar Sy, Ludivine Sagnier, Clotilde Hesme',
         bark_score: 78,
         filename: 'lupin.jpg',
      },
      {
        title: 'Thor: Love and Thunder',
         director:'Taika Waititi',
         cast:'Chris Hemsworth, Natalie Portman, Christian Bale',
         bark_score: 77,
         filename: 'thor.jpg',
      },
      {
        title: 'DC League of Super-Pets',
         director:'Jared Stern',
         cast:'Dwayne Johnson, Kevin Hart, Kate McKinnon',
         bark_score: 78,
         filename: 'super-pets.jpeg',
      },
      {
        title: 'Avatar',
         director:'James Cameron',
         cast:'Sam Worthington, Zoe Saldana, Sigourney Weaver',
         bark_score: 82,
         filename: 'avatar.jpeg',
      },
      
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;