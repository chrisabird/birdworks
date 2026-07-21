# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node is managed by **mise**, not installed system-wide. Never `npm i -g` or use a bare
system runtime. `mise.toml` pins the version and defines the tasks.

```bash
mise run dev        # dev server on :4321, hot reload
mise run lan        # same, exposed on the network (checking layout on a phone)
mise run build      # static output to dist/
mise run preview    # serve dist/ — what GitHub Pages actually serves
mise run check      # astro check: components + content schema types
mise run verify     # check + build; run before pushing
mise run clean      # remove dist/ and .astro/
```

Editing `mise.toml` invalidates trust — re-run `mise trust` if a task suddenly errors.
Outside a task, prefix commands with `mise exec --`.

There are no tests. `mise run check` is the correctness gate: it type-checks `.astro`
files *and* validates every content file against its Zod schema, so a malformed
frontmatter key fails there rather than at runtime.

## Astro version

This is **Astro 7**, which is newer than most training data. Two things that differ from
Astro 5 idioms and will silently look correct if you write them from memory:

- `import { z } from 'astro/zod'` — **not** from `astro:content` (deprecated, removed in 7)
- Zod 4: `z.url()`, not `z.string().url()`

Verify API surface against `node_modules/astro/` rather than assuming. Content Layer
(`glob` loader, `getCollection`, `render`, `src/content.config.ts`) is unchanged.

## Architecture

Static site, no backend, no database, no auth, no client framework. Purchases go through
**Stripe embedded buy buttons** configured in the Stripe dashboard — the site never
handles payment data and has no server to run.

### Content drives pages

`src/content.config.ts` defines the `products` collection. A product is **not** a flat
record — its `sections` array is an ordered sequence of narrative blocks that
`src/pages/products/[...slug].astro` renders in order. The page is a long-form showcase
(closer to an Apple product page than a shop listing) ending in `BuyBlock`. Adding a
product is one Markdown file in `src/content/products/`; adding a *section* to a page is
an array entry, not a code change.

`src/site.ts` is the single source of truth for site-wide facts (email, trading details,
shipping) plus `formatPrice`. Anything appearing on more than one page belongs there.

### Photography-optional rendering

`Figure.astro` renders a real photo when `src` is set and otherwise a **labelled
placeholder at the final aspect ratio, printing the shot description on the page**. The
site therefore doubles as its own shot list while photography is outstanding. Preserve
this — do not substitute stock images or remove placeholders to make pages "look
finished". Swapping in a real photo is a one-line frontmatter change.

### Design system

All tokens live at the top of `src/styles/global.css`. Changing the palette means
changing variables there, not hunting through components.

- **Sumi** warm charcoal, **washi** warm off-white, **vermilion** as the *only* accent
- One typeface (Inter Variable, self-hosted via fontsource — no Google Fonts request, which
  is why the privacy policy can claim no third-party calls). Tone comes from size, weight
  and spacing, never from adding a second face
- `.on-sumi` flips a section to the dark palette by reassigning the same variables
- Layout follows *ma*: one idea per viewport, large section rhythm. Generous whitespace is
  the design, not padding to be tightened
- Motion is `.reveal` + one IntersectionObserver in `Base.astro`, behind
  `prefers-reduced-motion`. No animation library, no WebGL

## Constraints that are decisions, not accidents

Changing any of these changes the product. Confirm with the user first.

- **Scope is tabletop gaming only** — CCG and wargaming accessories. Unrelated projects
  (software tools, other hobbies) were explicitly considered and rejected for diluting the
  messaging.
- **IP**: no Games Workshop or Wizards of the Coast logos, trade dress, artwork, or **mana
  symbols**; no copies of their sculpts. Colours are named plainly (Red, White, Blue,
  Green, Black) — never guild names. Describing compatibility is fine; invoking brands is
  not.
- **Colour selection happens in Stripe checkout custom fields, not on the page.** Three
  parts × five colours is 125 combinations, which cannot be enumerated as buy buttons. Do
  not build an on-page configurator that drives checkout — Payment Links can't be
  prefilled, so that requires a serverless endpoint and a move off GitHub Pages.
- **UK only, not VAT registered.** Stripe shipping is restricted to GB. Selling digital
  goods into the EU triggers VAT from the first sale, so don't add downloads casually.
- **Legal pages are load-bearing**, not filler: full 14-day cancellation right (the
  made-to-order exemption is deliberately *not* claimed for stock designs), Consumer Rights
  Act faults, Stripe named as processor. Trading name and address render as visible `TBD`
  until supplied — that's intentional, not a bug to paper over.
- **Voice**: first-person maker, specifics over adjectives. Short declarative sentences.

## Deployment

GitHub Actions builds and deploys to GitHub Pages on push to `main`
(`.github/workflows/deploy.yml`, using `jdx/mise-action` so CI resolves the same Node).

`base` is `/` because the target is the custom domain `birdworks.uk` (`public/CNAME`).
**Until DNS points at GitHub, the site renders unstyled on the `*.github.io/birdworks/`
URL** — assets resolve one level too high. That is expected; do not "fix" it by changing
`base`, which would break the live domain later.

`PLAN.md` holds the full decision history, open blockers, and the photography shot list.
It is **gitignored** — commercial and legal notes, deliberately kept out of the public
repo. Read it if present locally; it will not exist in a fresh clone.
