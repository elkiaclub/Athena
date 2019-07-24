const { gql } = require('apollo-server')

const typeDef = gql`  
    extend type Query{
        mojangStatus:  [ServiceStatus]
        mojangStatistics(type: String): Sales
        getUUID(ign: String!): uuid
        playernamesToID(playernames: [String!]!): [uuid]
        playernameHistory(uuid: String!): [NameHistory]!
    }
    
    type ServiceStatus{
        hostname: String
        status: String
    } 

    type Sales{
        total: Int
        last24h: Int
        saleVelocityPerSeconds: Float
    }
  
    type uuid {
        id: String!
        name: String!
        legacy: Boolean
        demo: Boolean
    }
  
    type NameHistory{
        name: String!
        changedToAt: Float
    }
  
`

module.exports = {
  typeDef
}
