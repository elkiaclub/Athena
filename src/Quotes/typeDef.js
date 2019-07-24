const { gql } = require('apollo-server')

const typeDef = gql`
    extend type Query {
        quotes: [Quote!]!
        randomQuote: Quote
    }
    
    type Quote{
        id: ID!
        content: String!
        author: String!
    }

    input newQuote{
        content: String!
        author: String!
    }

    type Mutation {
        submitQuote(params: newQuote!): Quote!
    }
`

module.exports = {
  typeDef
}
