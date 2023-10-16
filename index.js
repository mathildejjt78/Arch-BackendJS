// init server

const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mathildejjt:mW7I8pceUqvQtI5p@cluster0.waldcrb.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`example app listening at https://localhost:${port}`);
})
/*
*/