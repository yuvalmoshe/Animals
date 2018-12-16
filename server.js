let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


let app = express()
app.listen(1111);


mongoose.connect('mongodb://localhost/spacebookDB', function() {
    console.log("DB connection established!!!");
})

const animalApi = require ('./Apis/animalApi.js')


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", animalApi)
