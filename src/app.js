import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import Quotes from './Quotes'
import Members from './Members'
import { typeDefs } from './typeDefs'

const startServer = async () => {
  const app = express()

  const server = new ApolloServer({
    typeDefs: [typeDefs, Quotes.typeDef],
    resolvers: [Quotes.resolvers]
  })

  server.applyMiddleware({ app })

  await mongoose.connect('mongodb+srv://athena:tpEB9zyhJ72q1XFr@atlas-6dnqi.mongodb.net/athena?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })

  let port = process.env.PORT === undefined ? 4000 : process.env.PORT
  console.log(port)
  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  )
}

startServer()
