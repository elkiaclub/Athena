import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { models, resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { database } from './db'

const startServer = async () => {
  const app = express()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true
  })

  server.applyMiddleware({ app })

  await database.connect()
  Object.keys(models).forEach(model => {
    database.register(models[model])
  })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

startServer()
