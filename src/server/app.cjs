const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const port = 3000 // Port on which the proxy server will run

app.use(cors())

// Step 3: Define the proxy route
app.get('/api-proxy', async (req, res) => {
  const apiUrl = req.query.url // URL of the API endpoint provided by the frontend
  try {
    const response = await axios.get(apiUrl) // Make the request to the target API
    res.json(response.data) // Send the API response back to the frontend
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' }) // Handle errors if any
  }
})

// Step 4: Start the server
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`)
})
