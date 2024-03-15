const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js app!');
});

app.listen(PORT, () => {
  console.log(`Node.js app listening on port ${PORT}`);
});