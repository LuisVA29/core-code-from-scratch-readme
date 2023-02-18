const express = require('express');
const app = express();
const port = 3000;

app.get('/api/buba-gump', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, () => {
  console.log(`Ping-Pong API listening at http://localhost:${port}`);
});
