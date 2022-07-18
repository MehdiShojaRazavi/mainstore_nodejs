const config = require('config');
const morgan = require('morgan');

module.exports = function(app, express){
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  if (app.get('env') === 'development') app.use(morgan('dev'));
}