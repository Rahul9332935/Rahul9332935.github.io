# Rahul Kumar Portfolio

Premium personal portfolio for a Java Backend Engineer, rebuilt with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and static export support.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- `next-themes`

## Structure

```text
app/
  apple-icon.png
  globals.css
  icon.png
  layout.tsx
  manifest.ts
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  back-to-top.tsx
  background-effects.tsx
  command-palette.tsx
  loading-screen.tsx
  site-footer.tsx
  site-header.tsx
  theme-provider.tsx
  theme-toggle.tsx
  sections/
  ui/
data/
  portfolio.ts
lib/
  site.ts
  utils.ts
public/
  assets/
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The project is configured for static export through `next.config.ts`, so the generated site is emitted into `out/`.

## Personalization

Current content is only based on data already present in the repo:

- Name: Rahul Kumar
- Email: `rahul9332935@gmail.com`
- Phone: `+91 8226956764`
- GitHub: `Rahul9332935`
- LinkedIn: `rahul9332`
- Education: Masai School, C. M. Science College, Kendriya Vidyalaya
- Legacy projects: Food App REST API, ASOS Clone, YouTube Mini App

Anything not verifiable from the existing repo is intentionally marked with `TODO`.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Keep the framework preset as `Next.js`.
3. Use the default build command: `next build`.
4. Deploy.

### GitHub Pages

1. Run `npm run build`.
2. Publish the generated `out/` directory.
3. If the final deployment URL changes, update `siteConfig.url` in [lib/site.ts](/Users/rahulkumar/Desktop/temp/Rahul9332935.github.io/lib/site.ts:1).

## Notes

- The contact form UI is present, but the submission backend is intentionally not wired yet.
- The GitHub contribution section uses a placeholder block to avoid inventing unsupported data sources.
- Replace `TODO` placeholders after supplying the latest resume or verified production experience.
