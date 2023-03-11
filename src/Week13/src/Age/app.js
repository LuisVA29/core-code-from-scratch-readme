const express = require('express');
const app = express();

// Route to predict age based on a name
app.get('/api/age/:name', (req, res) => {
  // Get the name parameter from the request
  const name = req.params.name;

  // Check if name parameter was provided
  if (!name) {
    return res.status(400).json({
      error: "Missing parameter 'name' was expected."
    });
  }

  // Generate a random age between 1 and 99
  const age = Math.floor(Math.random() * 99) + 1;

  // Calculate age in days
  const days = age * 365;

  // Return response
  return res.json({
    name: name,
    age: age,
    days: days
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
