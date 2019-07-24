const { Quote } = require('./model')
const { resolvers } = require('./resolvers')
const { typeDef } = require('./typeDef')

module.exports = {
  Quote,
  resolvers,
  typeDef
}
