// var bodyParser = require("body-parser");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Server started! at http:/localhost:" + PORT);
});