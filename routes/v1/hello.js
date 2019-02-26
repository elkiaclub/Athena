const Router = require('restify-router').Router

const router = new Router()
router.get('/hello', function (req, res, next) {
// do something with req.body
  res.send({status: 'success'})
  return next()
})

module.exports = router
