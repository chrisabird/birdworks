import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * A product page is not a database row. It is an ordered sequence of sections
 * plus a specs block plus the purchase data. Sections render in array order.
 */
const section = z.object({
  heading: z.string(),
  body: z.string(),
  /** Optional until photography exists; a labelled placeholder renders instead. */
  image: z.string().nullable().optional(),
  imageAlt: z.string().nullable().optional(),
  /** Which side the image sits on at desktop widths. Alternate down the page. */
  imageSide: z.enum(['left', 'right']).default('right'),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    /** Sort order on the home page. Lower first. */
    order: z.number().default(100),
    draft: z.boolean().default(false),

    // --- Purchase -------------------------------------------------------
    price: z.number().nullable().default(null),
    currency: z.string().default('GBP'),
    postage: z.number().nullable().default(null),
    postageLabel: z.string().default('UK delivery'),
    leadTime: z.string().nullable().default(null),

    /** Both required before a real buy button can render. */
    stripeBuyButtonId: z.string().nullable().default(null),
    stripePublishableKey: z.string().nullable().default(null),

    /**
     * Colour choice happens in Stripe checkout via custom fields, not on the
     * page. This drives the copy and the colour swatches only.
     */
    parts: z
      .array(z.object({ name: z.string(), role: z.string() }))
      .default([]),
    colours: z
      .array(z.object({ name: z.string(), hex: z.string() }))
      .default([]),

    // --- Content --------------------------------------------------------
    hero: z
      .object({
        image: z.string().nullable().optional(),
        imageAlt: z.string().nullable().optional(),
      })
      .default({}),
    intro: z.string().optional(),
    sections: z.array(section).default([]),
    gallery: z
      .array(
        z.object({
          image: z.string().nullable().optional(),
          alt: z.string().nullable().optional(),
          caption: z.string().nullable().optional(),
        }),
      )
      .default([]),

    specs: z.record(z.string(), z.string()).default({}),
  }),
});

export const collections = { products };
