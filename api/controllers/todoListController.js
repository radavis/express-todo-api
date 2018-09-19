'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Task')

exports.index = function(request, response) {
  Task.find({}, function(error, task) {
    if(error)
      response.send(error);
    response.json(task);
  });
};

exports.create = function(request, response) {
  var newTask = new Task(request.body);
  newTask.save(function(error, task) {
    if(error)
      response.send(error);
    response.json(task);
  });
};

exports.show = function(request, response) {
  Task.findById(request.params.taskId, function(error, task) {
    if(error)
      response.send(error);
    response.json(task);
  })
}

exports.update = function(request, response) {
  Task.findOneAndUpdate(
    { _id: request.params.taskId },
    request.body,
    { new: true },
    function(error, task) {
      if(error)
        response.send(error);
      response.json(task);
  });
};

exports.destroy = function(request, response) {
  Task.remove({ _id: request.params.taskId }, function(error, task) {
    if(error)
      response.send(error);
    response.json({ message: 'Task destroyed.'})
  })
}
