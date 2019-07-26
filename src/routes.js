var fetchIssues = require("./fetchRepo.js");
var settings = require("../settings.js");
var path = require("path");
var cors = require("cors");


//this is a VERY MINIMAL ROUTING APP, not designed to be a full server.
var appRouter = function (app) {

  //API method to serve all issues fetched from GitHub.
  app.get("/repo/github", cors(), function(req, res) {
    fetchRepo(settings).then(function(response){
      res.status(200).send(response);
    });
  });

  //Simple static server to serve the UI content.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
  });

  //Simple static server to serve the UI content.
  app.get("/src/ui.js", function(req, res) {
    res.sendFile(path.join(__dirname + '/ui.js'));
  });

}

module.exports = appRouter;
