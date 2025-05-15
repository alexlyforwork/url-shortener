const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/url.js')

dotenv.config();

mongoose
    .connect(
        process.env.mongoURL
    )
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.log(err);
    })

app.use(express.json())
app.use(route)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})