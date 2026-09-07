import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resourceSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  author: z.string().default('Mobius'),
  featured: z.boolean().default(false),
  updatedAt: z.coerce.date(),
  source: z.url().optional(),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/skills' }),
  schema: resourceSchema,
});

const prompts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/prompts' }),
  schema: resourceSchema,
});

const workflows = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/workflows' }),
  schema: resourceSchema,
});

const taste = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/taste' }),
  schema: resourceSchema,
});

export const collections = { skills, prompts, workflows, taste };
