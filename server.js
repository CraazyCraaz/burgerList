var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const htmlRoutes = require('./controllers/burgersController')
const tableRoutes = require('./controllers/api-routes')

app.use(htmlRoutes);
app.use(tableRoutes)
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
