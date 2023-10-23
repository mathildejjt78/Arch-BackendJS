// init server

const express = require('express');
const app = express();
const port = 3000;

const pkmRouter = require ('./routes/pkmRouter');
const userRouter = require ('./routes/userRouter');


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://{user}:{password}@cluster0.waldcrb.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/pkm', pkmRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`example app listening at https://localhost:${port}`);
})

