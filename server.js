// app.js
const express = require('express');
const { createClient } = require('redis');
const { User } = require('./models');

const app = express();
const redisClient = createClient();

redisClient.on('error', (err) => console.error('Redis Error:', err));

(async () => {
  await redisClient.connect();
})();

// Middleware to check cache
async function cache(req, res, next) {
  const data = await redisClient.get('users');
  if (data) {
    console.log('Serving from cache');
    return res.json(JSON.parse(data));
  }
  next();
}

app.get('/users', cache, async (req, res) => {
  console.log('Fetching from DB...');
  const users = await User.findAll();
  await redisClient.setEx('users', 60, JSON.stringify(users)); // store for 60 sec
  res.json(users);
});

app.listen(3000, () => console.log('Server running on port 3000'));
