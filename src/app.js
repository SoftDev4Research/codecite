var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var port = process.env.CODE_CITE_PORT || 5000;
var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});
