import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.optional(z.string()),
    date: z.coerce.date(),
    tags: z.string()
  })
});

const musicCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    releaseDate: z.coerce.date(),
    genre: z.string(),
    youtube: z.string().optional(),
    soundcloud: z.string().optional(),
  })
})

export const collections = { blog: blogCollection, music: musicCollection };
