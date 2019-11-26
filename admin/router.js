const models = require('./model.js');

const fs = require('fs');
const path = require('path');
const routesPath = path.resolve(__dirname, './routes/');
let routes = {}
let routeFiles = fs.readdirSync(routesPath);
routeFiles.map(file => {
  routes[file.split('.')[0]] = require(path.resolve(routesPath,file));
})

const {requestLogin} = require('./routes/login');

module.exports = (app) => {
  app
  .get('/', (req, res) => res.json({test: 'ok'}))
  .post('/user', routes.user.add)
  .get('/users', routes.user.list)
  .get('/users/total', routes.user.total)
  .delete('/user/:id', routes.user.delete)
  .get('/user/:id', routes.user.detail)
  .put('/user/:id', routes.user.update)

  .post('/group', routes.group.add)
  .get('/groups', routes.group.list)
  .get('/groups/total', routes.group.total)
  .get('/group/:id', routes.group.detail)
  .put('/group/:id', routes.group.update)
  .delete('/group/:id', routes.group.delete)
  .get('/groups/count', routes.group.count)

  .post('/case', routes.case.add)
  .get('/cases', routes.case.list)
  .get('/cases/total', routes.case.total)
  .get('/case/:id', routes.case.detail)
  .put('/case/:id', routes.case.update)
  .delete('/case/:id', routes.case.delete)

  .post('/node', routes.node.add)
  .get('/nodes', routes.node.list)
  .get('/nodes/total', routes.node.total)
  .get('/node/:id', routes.node.detail)
  .put('/node/:id', routes.node.update)
  .delete('/user/:id', routes.node.delete)

  .post('/upload', routes.upload)
}
