const { Member } = require('./model')
const { resolvers } = require('./resolvers')
const { typeDef } = require('./typeDef')

module.exports = {
  Member,
  resolvers,
  typeDef
}
