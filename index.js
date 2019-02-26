const restify = require('restify')
const errs = require('restify-errors')
const routes = require('./routes/index')

var server = restify.createServer()
// add all routes registered in the router to this server instance
routes.applyRoutes(server)

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})
