const express = require('express');
const app = express();
const config = require('config');
const router = require('./src/routes');

require('./startup/config')(app, express);
require('./startup/db')();
require('./startup/logging')();

app.use('/api', router);

require('./src/middlewares/error')(app);

const port = config.get('port');
app.listen(port, () => console.log(`listening on port ${port}`));