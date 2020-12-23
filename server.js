
var users = []

var express = require("express");
var morgan = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('index');
    

})

app.post('/index', (req, res) => {
    console.log("signup succes")
    console.log(JSON.stringify(req.body))
    res.send('signup successfuly');
})

app.listen(3000, () =>{
    console.log("server is running on port 3000")
})