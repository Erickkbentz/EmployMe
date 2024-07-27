const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Import job routes
const jobsRouter = require('./routers/jobsRouter');

app.use('/jobs', jobsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});