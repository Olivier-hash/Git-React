const express = require('express');
const app = express();

// Sample route that throws error
app.get('/', (req, res) => {
  throw new Error("Something broke on the homepage!");
});

// 404 handler (route not found)
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
