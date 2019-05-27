var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Serve static content from the public directory in the application directory
app.use(express.static(__dirname + "/public"));

// Lets Express handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Express Handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve index.handlebars to the root route.
// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })
 
// app.get('/', function (req, res) {
//     res.render('home');
// });

// Start server so it listens for client requests
app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});