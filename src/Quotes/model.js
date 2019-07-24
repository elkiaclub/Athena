import mongoose from 'mongoose'

export const Quote = mongoose.model('Quote', { content: String, author: String })
