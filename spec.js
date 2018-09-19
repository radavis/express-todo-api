var request = require('supertest');

describe('loading express', function() {
  var server;

  beforeEach(function() {
    server = require('./server');
  });

  afterEach(function() {
    server.close();
  });

  it('responds to GET /', function testGetRootPath(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('responds to GET /tasks', function testGetTasksPath(done) {
    request(server)
      .get('/tasks')
      .expect(200, done);
  });

  it('responds to POST /tasks', function testPostTasksPath(done) {
    request(server)
      .post('/tasks', { name: "get the milk" })
      .expect(200, done);
  });

  it('responds to GET /tasks/:id', function testGetTaskPath(done) {
    var task = new Task({ name: 'walk the dog' });
    request(server)
      .get('/tasks/' + task._id)
      .expect(200, done);
  });

  it('responds to PUT /tasks/:id', function testPutTaskPath(done) {
    var task = new Task({ name: 'walk the dog' });
    request(server)
      .put('/tasks/' + task._id)
      .send({ name: 'feed the cat'})
      .expect(200, done);
  });

  it('responds to DELETE /tasks/:id', function testPutTaskPath(done) {
    var task = new Task({ name: 'walk the dog' });
    request(server)
      .delete('/tasks/' + task._id)
      .expect(200, done);
  });

  it('returns 404 for an unknown path', function testBunkPath(done) {
    request(server)
      .get('/bunk')
      .expect(404, done);
  });
})
