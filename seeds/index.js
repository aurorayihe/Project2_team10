const sequelize = require('../config/connection');
const seedMovies = require('./movieSeeds');
const seedReviews = require('./reviewerSeeds');
const seedUsers = require('./userSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedMovies();
  console.log('\n----- MOVIES SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  

  process.exit(0);
};

seedAll();