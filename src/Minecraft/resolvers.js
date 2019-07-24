import axios from 'axios'

/*   Bridge for Mojang API
 *   https://wiki.vg/Mojang_API
 */

const resolvers = {
  Query: {
    mojangStatus: async () => {
      const endpoint = 'https://status.mojang.com/check'
      try {
        const response = await axios.get(endpoint)
        let data = response.data.map(obj => {
          return {hostname: Object.keys(obj)[0], status: Object.values(obj)[0]}
        })
        console.log(data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    mojangStatistics: async (_, {type}) => {
      const endpoint = 'https://api.mojang.com/orders/statistics'
      const payload = {
        'metricKeys':
          type === 'Minecraft' ? ['item_sold_minecraft'] : type === 'Giftcard' ? ['prepaid_card_redeemed_minecraft'] : type === 'Cobalt' ? ['item_sold_cobalt'] : type === 'Scrolls' ? ['item_sold_scrolls'] : ['item_sold_minecraft', 'prepaid_card_redeemed_minecraft', 'item_sold_cobalt', 'item_sold_scrolls']
      }
      try {
        const response = await axios.post(endpoint, payload)
        let data = response.data
        console.log(data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    getUUID: async (_, {ign}) => {
      const endpoint = `https://api.mojang.com/users/profiles/minecraft/${ign}`
      try {
        const response = await axios.get(endpoint)
        return response.data
      } catch (error) {
        console.error(error)
      }
    },
    playernameHistory: async (_, {uuid}) => {
      const endpoint = `https://api.mojang.com/user/profiles/${uuid}/names`
      try {
        const response = await axios.get(endpoint)
        console.log(response.data)
        return response.data
      } catch (error) {
        console.error(error)
      }
    },
    playernamesToID: async (_, {playernames}) => {
      const endpoint = `https://api.mojang.com/profiles/minecraft`
      try {
        const response = await axios.post(endpoint, playernames)
        return response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}

module.exports = {
  resolvers
}
