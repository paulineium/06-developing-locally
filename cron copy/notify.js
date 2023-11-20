require('dotenv').config()

var Pushover = require('node-pushover');
var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USER_KEY
}); 

// No callback function defined:
push.send("hello", "♥️", handleErrors);

function handleErrors(error, response) {
    if (error) console.log('error:', error)
    console.log(response)
}