import { Players } from './models/player'
import { Servers } from './models/server'
export const models = { Players, Servers }
export const resolvers = {
  Query: {
    hello: () => 'hi',
    Players: async () => {
      let players = await Players.find()
      let data = []
      await players.forEach(player => {
        data.push(player.get('ign'))
      })
      return data
    },
    Servers: () => Servers.find()
  }
}
