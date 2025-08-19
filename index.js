const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
