# Project2_team10
Project #2 - Maddy Doggy

## The Challenge 
Our users want to creat an application include node.js, handlebars and MVC to create a full-stack application. Our application must use MVC and handlebars. 

![](./)


## The Concept 
We want to create a site that show the list of different movies and their rating base on bark score and user can log in to leave a review for their movie. We are using Bulma to use as a CSS Bootstrap for this application. 

## User Story 

```
```

## The Logic 

```
GIVEN that I want to choose a movie to watch and leave a review after
WHEN I open the web page
THEN I am present with a homepage include Popular Movies, Popular In Netflix, and Popular in Theatres with different types of movie according to it
WHEN I click a Movies button in the nav bars
THEN I am navigate to a page with a list of all movies with director's name, bark score and a poster
WHEN I click Log In in the nav bar
THEN I am navigate to a page to put username and password to sign in
WHEN I don't have an account yet
THEN I can click the Create An Account to lead me to the Sign Up page
WHEN I am in the sign up page
THEN I can put my username, email, and password to create a new account
WHEN I finish create a new account
THEN I am leading to a homepage with a Profile and Log Out added in the navigation bars
WHEN I click into any of the movie
THEN I can see a poster, name of the movie, cast, and director and also a text box for me to review the movie
WHEN I click the Profile button
THEN I am leading to a page with the list of movies I had review before
WHEN I click Log Out
THEN I am a log out of my account and lead to original homepage
```

## The Process
To sastify our user's needs, we created: 
- An HTML file that import Bulma, CSS File, Google Font, JavaScript and Font Awesome
- Created seeds to store all of the movies's information
- Created seeds to store user's information
- Created model and routes
- Created Handlebars and put the HTML in for each page
- Fixing error to make everything connect and work properly

Handlebars

```
Created 8 files for handlebars: 
Main, All Movies, Homepage, Login, Movie, Profile, Review, Sign Up.

```

CSS File

```
- Red navigation bar and white backgound
- Log in, Log Out, Movies, Profile buttons in the nav bar
- Cards of different movies with images and spread evenly
- User's viewport adaptability

```

Routes 

   Created routes for each page 
```

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;
```

Seeds

   Created seed file for all movies:

```
title: 'The Godfather',
        director: 'Francis Ford Coppola',
        cast:'Marlon Brando, Al Pacino, James Caan',
        movie_id: 1,
        bark_score: 95,
        filename: '01-The-Godfather.jpg',

```

   Created seed for User: 

```
email: 'gus@hotmail.com',
      username: 'gus',
      password: 'password123'

```

## Heroku 

## The Result 
After connecting all files, we were able to have a working page with movies so user can choose a movie to watch in a movie's night and can leave a review after finishing watching

## The Collaborators
[Jenny Wang](https://github.com/aurorayihe)
[Gassan Bundakji](https://github.com/gbundakji)
[Daisy Lien](https://github.com/quynhlien2002)

## Submission 



