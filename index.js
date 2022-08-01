const express = require('express');
const app = express();
const config = require('config');
const router = require('./src/routes');

const AppConfig = require('./startup/config'); //(app, express);
const redisDB = require('./startup/initRedis');
const Db = require('./startup/db');
const Logging = require('./startup/logging');

new AppConfig(app, express);
redisDB;
new Db();
new Logging();

app.use('/', router);

require('./src/middlewares/error')(app);

const port = config.get('port');
app.listen(port, () => console.log(`listening on port ${port}`));