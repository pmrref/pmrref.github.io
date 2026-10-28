import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  product: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/product' }),
    schema: z.object({ title: z.string(), description: z.string(), order: z.number() }),
  }),
  news: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
    schema: z.object({ title: z.string(), description: z.string(), date: z.coerce.date() }),
  }),
};
