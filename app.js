const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Endpoint to handle the incoming POST request
app.post('/process_data', (req, res) => {
  const requestData = req.body.data;

  // Extracting required data from the request
  const oddNumbers = requestData.filter(item => parseInt(item) % 2 !== 0);
  const evenNumbers = requestData.filter(item => parseInt(item) % 2 === 0);
  const alphabets = requestData.filter(item => isNaN(parseInt(item)));

  // Building the response object
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets
  };

  // Sending the response
  res.json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
