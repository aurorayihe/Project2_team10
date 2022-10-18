const {User} = require('../models');

const userData = [
    {
      email: 'gus@hotmail.com',
      username: 'gus',
      password: 'password123'
    },
    {
      email: 'Daisy@gmail.com',
      username: 'daisy',
      password: 'password123'
    },
    {
      email: 'Jenny@aol.com',
      username: 'jenny',
      password: 'password123'
    },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;