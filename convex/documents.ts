import { mutation, query } from './_generated/server'
import { ConvexError, v } from 'convex/values'

export const getDocuments = query({
  async handler(ctx) {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier

    if (!userId) {
      return []
    }

    return await ctx.db
      .query('documents')
      .withIndex('by_token_identifier', (q) => q.eq('tokenIdentifier', userId))
      .collect()
  },
})

export const createDocuments = mutation({
  args: {
    title: v.string(),
    text: v.string(),
  },

  async handler(ctx, args) {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier

    if (!userId) {
      throw new ConvexError('Not authenticated')
    }

    await ctx.db.insert('documents', {
      title: args.title,
      text: args.text,
      tokenIdentifier: userId,
    })
  },
})

export const deleteDocuments = mutation({
  args: {
    noteId: v.id('documents'),
  },

  async handler(ctx, args) {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier

    if (!userId) {
      throw new ConvexError('You must be logged in to create a note')
    }

    const note = await ctx.db.get(args.noteId)

    if (!note) {
      throw new ConvexError('Note not found')
    }

    await ctx.db.delete(args.noteId)
  },
})
