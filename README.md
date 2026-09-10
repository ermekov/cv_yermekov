# Yerassyl Yermekov — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + next-intl. Dark, premium
engineering-style personal portfolio, fully localized in English, Russian and Kazakh.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000 (redirects to /en)
```

```bash
npm run build
npm run start
npm run lint
```

## i18n architecture

- **Library:** [next-intl](https://next-intl.dev) v4, App Router integration.
- **Routing:** every page lives under `app/[locale]/...`. Locales are always
  prefixed (`/en`, `/ru`, `/kk`) — there's no unprefixed default, so the locale in
  the URL is always explicit. Visiting `/` redirects to `/en`.
- **Persistence:** `proxy.ts` (next-intl's middleware, renamed per Next 16's
  `proxy` convention) sets a `NEXT_LOCALE` cookie whenever a locale is resolved, so
  a repeat visit remembers the last language. The `LanguageSwitcher` component
  changes locale via `next-intl`'s router, which preserves the current route (e.g.
  switching to Russian on a project page keeps you on that same project page, in
  Russian) and updates the cookie.
- **Translation source of truth:**
  - `messages/en.json`, `messages/ru.json`, `messages/kk.json` — all UI chrome:
    navigation, headings, buttons, form labels, status labels, 404 page, SEO
    metadata. Consumed via `useTranslations("namespace")` in both server and
    client components.
  - `data/*.ts` — structured, extensible content (projects, journey, approach
    steps, certificates, stack, currently-building). Translatable fields use a
    `Localized` type (`{ en, ru, kk }`) or `LocalizedList` for arrays, defined in
    `types/i18n.ts`. Components read the active locale with `useLocale()` and
    resolve text with the `pick()` / `pickList()` helpers.
- **Why the split:** UI chrome (button labels, section headings) rarely changes
  and benefits from a flat namespaced JSON file. Project/content data is
  structured and extensible — you add a new project by adding one object to
  `data/projects.ts` with `en`/`ru`/`kk` fields, no UI or messages-file changes
  required.
- **Metadata:** `app/[locale]/layout.tsx` and the project detail page generate
  localized `<title>`, description, Open Graph tags and `hreflang` alternates for
  all three locales. `app/sitemap.ts` emits one entry per locale per route, each
  with `hreflang` alternates pointing at its siblings.
- **404 handling:** `app/[locale]/not-found.tsx` renders a localized 404. A
  catch-all route (`app/[locale]/[...rest]/page.tsx`) ensures *any* unmatched path
  under a valid locale prefix (not just explicit `notFound()` calls, like an
  invalid project slug) resolves to that localized 404 instead of Next's generic
  English fallback.

### Supported routes

```
/en                                      /ru                                      /kk
/en/projects/peakrent-ai                 /ru/projects/peakrent-ai                 /kk/projects/peakrent-ai
/en/projects/ai-business-assistant       /ru/projects/ai-business-assistant       /kk/projects/ai-business-assistant
/sitemap.xml   /robots.txt   (locale-independent, list all localized URLs)
```

### Adding a new language

1. Add the locale code to `i18n/routing.ts` (`locales` array).
2. Add `messages/<locale>.json` (copy `en.json` as a starting point and translate).
3. Add the new locale key to every `Localized`/`LocalizedList` object in `data/*.ts`.
4. Add the display label to `DISPLAY_LABEL` in `components/LanguageSwitcher.tsx`.

### Adding a new project

Add an object to `data/projects.ts` with `en`/`ru`/`kk` values for every
`Localized` field. It appears on the homepage and gets its own
`/[locale]/projects/<slug>` case-study page automatically — no component changes.

## What to do before you deploy

1. **Add your real CV** at `public/cv/Yermekov_Yerassyl_CV.pdf` (see
   `public/cv/README.txt`). The Download CV button already points here.
2. **Add project screenshots** to `public/projects/` (see
   `public/projects/README.txt`), then swap `GalleryPlaceholder` in
   `app/[locale]/projects/[slug]/page.tsx` for real `<Image>` tags.
3. **Set your real domain** — update `site.domain` in `data/site.ts`. It feeds
   `metadataBase`, Open Graph tags, hreflang alternates and `sitemap.ts`.
4. **Add your LinkedIn URL**, if/when you have one, to `site.linkedin` in
   `data/site.ts`. Every component that shows a LinkedIn link checks for this
   and hides itself automatically while it's `null` — nothing was invented.

## Where everything lives

```
app/
  [locale]/
    layout.tsx              Locale-aware root layout, fonts, localized metadata
    page.tsx                 Homepage — assembles all sections
    not-found.tsx             Localized 404
    [...rest]/page.tsx        Catch-all so any unmatched path gets the localized 404
    projects/[slug]/page.tsx  Case-study route (generateStaticParams + localized metadata)
  globals.css
  robots.ts / sitemap.ts     Locale-independent, list every localized URL
i18n/
  routing.ts                 Supported locales + default
  navigation.ts               Locale-aware Link / useRouter / usePathname
  request.ts                   Resolves locale + loads messages
proxy.ts                      next-intl middleware (locale detection, cookie)
messages/
  en.json / ru.json / kk.json  UI chrome translations
components/                    All UI sections + reusable pieces
data/                          Structured, extensible content — Localized fields
  site.ts                      Locale-independent facts (email, GitHub, CV path, dates)
  projects.ts                  Project case studies (add a project here)
  stack.ts / journey.ts / approach.ts / building.ts / certificates.ts
types/
  i18n.ts                       Localized/LocalizedList types + pick()/pickList()
  project.ts                    Project data shape
public/
  cv/                           Put your CV PDF here
  projects/                    Put project screenshots here
  fonts/                        Self-hosted Inter + JetBrains Mono
```

## Notes

- Dark mode is the only mode by design.
- The contact form opens the visitor's email client via `mailto:` (subject/body
  localized); nothing is stored or sent to a backend.
- Motion respects `prefers-reduced-motion`.
- Translations were written per-language for tone, not machine-translated —
  technical terms (Python, PostgreSQL, API, Django, GitHub, etc.) are kept as
  recognized international terms in all three languages, matching how they're
  actually used in the Kazakhstani IT industry.
