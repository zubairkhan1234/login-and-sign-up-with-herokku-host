
var users = [
    {
        userName: "zubair",
        email: "zubair@gmail.com",
        phone: "121212",
        password: "121212w"
    }
]

var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
const PORT = process.env.PORT || 5000

app.get('/', (req, res, next) => {
    console.log("some one get menu");
    res.send("signup success full");
})

app.post('/signup', (req, res) => {
    var signemail = req.body.email;
    console.log(signemail);

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







app.post("/login", (req, res) => {

    var loginEmail = req.body.email
    var loginPassword = req.body.password

    isFound = false

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === loginEmail) {
            isFound = i
            break;
        }
    }

    if (isFound === false) {
        res.send("incorrect email or password")

    } else if (users[isFound].password === loginPassword) {

        res.send("congratulation")

    }else{
        res.status(403).send("Password or email invalid")
    }

})




app.listen(3000, () => {
    console.log("server is running on port 3000")
})