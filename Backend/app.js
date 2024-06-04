const express = require('express');
const app = express();
const authRoutes = require('./Route/auth')
const mongoose = require('mongoose')
const db = require('./db');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/Hotel')
    .then((res) => {
        console.log("Connected to db");
    })
    .catch(error => console.log(error))


app.get('/', (req, res) => {
    res.send('Server is started')
})

app.use(authRoutes)

app.listen(8080, () => {
    console.log('successfully started at port: 8080');
})