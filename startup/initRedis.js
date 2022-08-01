const redisDB = require('redis');
const redisClient = redisDB.createClient();
redisClient.connect();
redisClient.on('connected', () => console.log('Connect to redis'));
redisClient.on('ready', () => console.log('Redis ready to use'));
redisClient.on('error', (err) => console.log(err.message));
redisClient.on('end', () => console.log('Redis disconnected'));

module.exports = redisClient;