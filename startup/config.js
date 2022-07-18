const config = require('config');
const morgan = require('morgan');

module.exports = function(app, express){
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  if (app.get('env') === 'development') app.use(morgan('dev'));
  const swaggerUI = require("swagger-ui-express");
  const swaggerJsDoc = require("swagger-jsdoc");
  app.use(
    "/api-doc",
    swaggerUI.serve,
    swaggerUI.setup(
      swaggerJsDoc({
        swaggerDefinition: {
          openapi: "3.0.0",
          info: {
            title: "Shoja Store",
            version: "2.0.0",
            description:
              "Big version of store",
            contact: {
              name: "Mehdi Shoja Razavi",
              url: "https://shojastore.com",
              email: "mehdishojarazavi@gmail.com",
            },
          },
          servers: [
            {
              url: "http://localhost:8001",
            },
            {
              url: "http://localhost:5000",
            },
          ],
        },
        apis: ["./../src/routes/**/swagger.js"],
      }),
      {explorer: true},
    )
  );
}