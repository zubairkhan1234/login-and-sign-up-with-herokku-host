
var users = [
    {
        userName: "zubair",
        email: "zubair@gmail.com",
        phone: "121212",
        password: "121212w"
    }
]

var express = require("express");
const PORT = process.env.PORT || 5000
var morgan = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    console.log("some one get menu");
    res.send("signup success full");
})

app.post('/signup', (req, res) => {
    var signemail = req.body.email ;
    console.log(email) ;

    isFound = false
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === signemail) {
            isFound = true
            break;

        }
    }

    if (isFound) {
        res.send("this email is already Entered")
    } else {
        users.push(req.body)
        res.send("signUp successFuly")
    }

    console.log(users)
});

app.listen(3000, () => {
    console.log("server is running on port 3000")
})