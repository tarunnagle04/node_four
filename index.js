const express = require('express');
const app = express();
var cors = require('cors');
const register = require('./Routes/register');
const login = require('./Routes/login');
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // to support URL-encoded bodies

app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/ui/register.html");
});

app.get("/login-page", (req, res) => {
    res.sendFile(__dirname + "/ui/login.html");
});

app.use('/', register);
app.use('/', login);

app.listen(8000, () => {
    console.log('Your app is running on localhost 8000')
})
