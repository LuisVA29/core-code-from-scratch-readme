const express = require('express');
const app = express();
const port = 3000;

app.get('/api/delay/:delay?', (req, res) => {
  const delay = parseInt(req.params.delay) || 1000;
  setTimeout(() => {
    res.send('Delayed response');
  }, delay);
});

app.listen(port, () => {
  console.log(`Delay API listening at http://localhost:${port}`);
});
