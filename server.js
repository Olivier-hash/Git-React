// app.js
const express = require('express');

const { createClient } = require('redis');








app.get('/users', cache, async (req, res) => {

  console.log('Fetching from DB...');

  await redisClient.setEx('users', 60, JSON.stringify(users)); // store for 60 sec
  
  res.json(users);
});

app.listen(3000, () => console.log('Server running on port 3000'));
