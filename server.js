const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');


const app = express();
const PORT = 3001 || process.env.PORT;

const hbs = exphbs.create({ helpers });

Handlebars.registerHelper('each_upto', function(ary, min,  max, options) {
  if(!ary || ary.length == 0 )
      return options.inverse(this);

  if(min === null) {
    return;
  }

  var result = '';
  for(var i = min; i < max && i < ary.length; ++i)
      result += options.fn(ary[i]);
  return result;
});

const sess = {
    secret: 'This is my secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
