var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000,
  routes = require('./api/routes/todoListRoutes'),
  mongoose = require('mongoose'),
  Task = require('./api/models/task'),

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-todo-api_development', { useNewUrlParser: true });

// app.use(bodyParser.urlencode({ extended: true }));  // fails
app.use(bodyParser.json());
routes(app);
app.use(function(request, response) {
  response.status(404).send({ url: request.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo-list-api server listening on port ' + port);
