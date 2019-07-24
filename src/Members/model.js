import mongoose from 'mongoose'

export const Quote = mongoose.model('Member', {
  discord: {
    id: String,
    tag: String,
    username: String,
    roleColor: String,
    guildMember: Boolean,
    joinedAt: Date
  }
})
