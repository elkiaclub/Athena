import { Quote } from './model'

const resolvers = {
  Query: {
    quotes: () => Quote.find(),
    randomQuote: async () => {
      // Get the count of all users
      let total = await Quote.count()
      // Get a random entry
      var random = Math.floor(Math.random() * total)
      return Quote.findOne().skip(random)
    }
  },
  Mutation: {
    submitQuote: async (_, { content, author }) => {
      const quote = new Quote({ content, author })
      await quote.save()
      return quote
    }
  }
}

module.exports = {
  resolvers
}
