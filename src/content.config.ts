import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    code: z.string(),
    summary: z.string(),
    size: z.string(),
    pressure: z.string(),
    temperature: z.string(),
    standard: z.string(),
    applications: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({ title: z.string(), summary: z.string() }),
});

export const collections = { products, blog };
