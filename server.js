const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

// DB-CONNECTED
connectDB()

const app = express()
app.get('/', (req, res) => {
  res.send('Ali SALOM')
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));