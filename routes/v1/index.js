const fs = require('fs')
const Router = require('restify-router').Router
const router = new Router()

const v1Files = fs.readdirSync('./routes/v1')
.filter(file => file !== 'index.js') // Exclude this file.

for (const file of v1Files) {
  let noextension = file.split('.').slice(0, -1).join('.')
  console.log(`Loaded v1/${noextension}`)
  router.add(``, require(`./${file}`))
}

module.exports = router
