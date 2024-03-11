const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./Router/userRoutes")
const port = 5000
const cors = require("cors")
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/api',userRoutes)



mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Database Connected!'));
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})