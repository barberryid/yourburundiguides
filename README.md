# Your Burundi Guides

Astro static site for Your Burundi Guides, a private local guiding service based in Bujumbura, Burundi.

The site is designed to be simple, fast, mobile-first, and conversion-focused. The primary conversion action is contacting Gabriel on WhatsApp for local guiding, transport, airport pickup, translation, day trips, and practical arrival support.

## Tech Stack

- Astro 5 static output
- Tailwind CSS through `@tailwindcss/vite`
- `@astrojs/sitemap`
- Cloudflare Pages-ready static build

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

`npm run build` outputs the static site to `dist/`.

## Site Structure

Main routes live in `src/pages/`:

- `/` - conversion-focused homepage
- `/services/` - guiding, transport, airport pickup, translation, planning, and cultural support
- `/prices/` - quote-based pricing information without fixed invented prices
- `/visa/` - practical arrival and visa guidance with official-source cautions
- `/photos/` - Burundi travel photo gallery
- `/reviews/` - traveller reviews
- `/things-to-do/` - popular Burundi places and trip ideas
- `/contact/` - WhatsApp and email contact options

Shared layout and navigation:

- `src/layouts/BaseLayout.astro` - metadata, Open Graph, structured data injection, header/footer wrapper
- `src/components/Header.astro` - desktop and mobile navigation with WhatsApp CTA
- `src/components/Footer.astro` - footer links and contact details

Homepage-focused components:

- `src/components/Hero.astro`
- `src/components/GuideProfiles.astro`
- `src/components/ServiceCards.astro`
- `src/components/PriceCards.astro`
- `src/components/ReviewCards.astro`
- `src/components/GalleryGrid.astro`
- `src/components/FAQ.astro`
- `src/components/WhatsAppCTA.astro`
- `src/components/SectionHeading.astro`

## Content Data

Reusable content is stored in `src/data/`:

- `site.ts` - global site metadata, WhatsApp link, email, guide profiles, page titles and descriptions
- `services.ts` - service cards and best-for lists
- `prices.ts` - quote-based price cards
- `reviews.ts` - traveller review cards
- `gallery.ts` - photo paths, alt text, and categories
- `faqs.ts` - FAQ accordion content

Update these data files when possible instead of hard-coding repeated content inside page templates.

## Homepage Flow

The homepage currently follows this structure:

1. Hero
2. Trust strip
3. Jump links
4. How booking works
5. Meet your Burundi guides
6. What we can help with
7. Why travel with a local Burundi guide?
8. Popular Burundi trips
9. Prices and quotes
10. What visitors say
11. Photos from Burundi
12. Burundi visa and arrival help
13. Common questions
14. Final WhatsApp CTA
15. Sticky mobile WhatsApp CTA

The homepage includes anchor IDs for jump links:

- `#how-it-works`
- `#guides`
- `#services`
- `#trips`
- `#prices`
- `#reviews`
- `#faq`
- `#contact`

## WhatsApp Handling

The main WhatsApp number is configured in `src/data/site.ts`:

```text
+257 69 52 87 84
```

The `whatsappLink` uses `wa.me` with a URL-encoded prefilled message. Keep all WhatsApp CTAs pointed to this central value unless there is a deliberate reason to override it.

## Styling Notes

Global design tokens and component classes are in `src/styles/global.css`.

The current design direction is warm, practical, and trustworthy:

- Warm cream page background
- Deep green headings and navigation
- White/light neutral cards
- WhatsApp green reserved for WhatsApp actions
- Gold accent for focus rings and small emphasis
- Rounded cards, subtle borders, and restrained shadows

The mobile sticky WhatsApp CTA is controlled by `.mobile-sticky-whatsapp` and appears below `768px`.

## Images

Static images live in `public/images/`:

- `hero/` - homepage hero image
- `guides/` - guide profile images
- `gallery/` - photo gallery images
- `reviews/` - review avatar/trip images
- `og/` - Open Graph image

Image components should use meaningful alt text, explicit `width` and `height`, `decoding="async"`, and `loading="lazy"` for below-the-fold images.

## SEO And Accessibility

The site uses:

- Per-page titles and descriptions from `src/data/site.ts`
- Canonical URLs through `BaseLayout.astro`
- Open Graph and Twitter metadata
- JSON-LD structured data on the homepage
- Semantic page structure with header, nav, main, sections, and footer
- Keyboard-accessible FAQ buttons with `aria-expanded` and `aria-controls`
- Visible focus styles through `:focus-visible`

## Deployment

The site is configured for static output with trailing slashes in `astro.config.mjs`.

Build before deploying:

```bash
npm run build
```

The configured production site URL is:

```text
https://www.yourburundiguides.com
```
