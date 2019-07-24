import { Quote } from './model'

const resolvers = {
  Query: {
    quotes: () => Quote.find(),
    randomQuote: async () => {
      // Get the count of all users
      let total = await Quote.countDocuments()
      // Get a random entry
      var random = Math.floor(Math.random() * total)
      return Quote.findOne().skip(random)
    }
  },
  Mutation: {
    submitQuote: async (_, {params}) => {
      console.log(params)
      const quote = new Quote(params)
      await quote.save()
      return quote
    }
  }
}

module.exports = {
  resolvers
}
