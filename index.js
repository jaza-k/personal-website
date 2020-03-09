const express = require('express');

// improves performance by decreasing the downloadable amount of data that's served
const compression = require('compression');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/route-handler');
const port = 3000;
const app = express();

// cache time for static files (a month)
const cacheTime = 30 * 24 * 60 * 60 * 1000;

// view engine setup
app.set('views', (__dirname, 'views'));
app.set('view engine', 'pug'); // sets express view engine to Pug

// compresses the response bodies from all requests before sending them
app.use(compression());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// use '/public/' to serve static files. also sets cache time for files
app.use(express.static(__dirname + '/public', {maxAge: cacheTime}));

// create all routes using individual pages
for (let page in routes) {
  app.use(page, routes[page]);
}

// catch 404 and forward to error handler (show 404 page)
app.use((request, response, next) => {
  response.status(404).render("errors/404", {title: "Error 404"});
});

// catch 500 and forward to error handler (show 500 page)
app.use((request, response, next) => {
  response.status(500).render("errors/500", {title: "Server Error"});
});

// GET request for favicon.ico is ignored
app.get('/favicon.ico', (request, response) => {
  // indicates that request has succeeded but no additional content is sent
  response.status(204);
});

app.listen(port);
console.log(`Express is listening on port ${port}`);
