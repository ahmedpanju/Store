var express = require('express');

var mongoose = require('mongoose');

var app = express();

var promise = mongoose.connect('mongodb://localhost:27170/shopping', {
  useMongoClient: true,
  /* other options */
});
app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/category/:category?', routes.category);

app.get('/category/:category?/:name?/:description?/:image?/:price?', routes.individual);

app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);