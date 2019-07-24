const { gql } = require('apollo-server')

const typeDef = gql`
    extend type Query {
        members: [Member!]!
        Member: Member!
    }
    
    type Member{
        id: ID!
        discord: Discord
        minecraft: Minecraft
    }

    type Discord{
        id: String!
        tag: String!
        username: String
    }

    type MinecraftTextures{
        skin: String
        cape: String
    }

    type Minecraft{
        uuid: String!
        ign: String!
        textures: MinecraftTextures
    }
`

module.exports = {
  typeDef
}
