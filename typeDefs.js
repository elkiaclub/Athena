import { gql } from 'apollo-server-express'
import {Model} from 'mongorito'
export const typeDefs = gql`
    type Player {
        ign: String
    }
    type Server {
        host: String
    }
    type Query {
        hello: String!
        Players: [String!]
        Player: String!
        Servers: String!
    }
`
