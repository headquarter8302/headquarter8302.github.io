// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.optional(z.string()),
    date: z.coerce.date(),
    tags: z.string()
  })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog: blogCollection };