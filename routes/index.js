const Router = require('restify-router').Router
const router = new Router()

router.add('/v1', require('./v1/index'))

const { name, version, description } = require('../package.json')
router.get('/', function (req, res, next) {
// do something with req.body
  res.send({ name, version, description })
  return next()
})
module.exports = router
