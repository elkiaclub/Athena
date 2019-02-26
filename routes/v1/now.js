const Router = require('restify-router').Router

const router = new Router()
router.get('/now', function (req, res, next) {
// do something with req.body
  res.send(new Date())
  return next()
})

module.exports = router
