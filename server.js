var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var usersData = require('./users-data');
var port = process.env.PORT || 3000;

// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

// Use Handlebars as the view engine for the app.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

/*
 * Route the root path ('/') to the index page.  Give Handlebars the
 * appropriate page title and data for all users to render.
 */
app.get('/', function (req, res) {
  res.render('index', {
    title: 'ToDoIt',
    usersData: usersData
  });
});

/*
 * Set up a dynamic route to render a page with a specified user's notes.
 * Give Handlebars the appropriate title, the specified user's note data,
 * and the specified user's username to render.
 */
app.get('/notes/:user', function (req, res, next) {

  var userData = usersData[req.params.user];

  if (userData) {
    res.render('notes', {
      title: 'ToDoIt - ' + req.params.user,
      notes: userData.notes,
      userName: userData.name
    });
  } else {
    next();
  }

});

// Return a 404 and render the 404 page for any other route.
app.get('*', function (req, res) {
  res.status(404).render('404', {
    title: 'ToDoIt'
  });
});

// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
