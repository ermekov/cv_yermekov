HOW TO ADD REAL SCREENSHOTS
============================

This works automatically — no code or data-file changes needed. Just drop
files in with the right name, then rebuild the site (`npm run build`) or
restart the dev server (`npm run dev`).

Create one folder per project, named after its slug:

  /public/projects/peakrent-ai/
  /public/projects/ai-business-assistant/
  /public/projects/ken-tereze-ai/

Inside each folder:

  cover.jpg   (or .png / .webp / .jpeg)
              → shown as the small thumbnail on the homepage project list
                (desktop only, large screens)

  1.jpg       (or .png / .webp / .jpeg)
  2.jpg
  3.jpg ...   → shown in order in the "Screenshots" section on that
                project's case-study page (/projects/<slug>)

Example for PeakRent:

  /public/projects/peakrent-ai/cover.jpg
  /public/projects/peakrent-ai/1.jpg
  /public/projects/peakrent-ai/2.jpg
  /public/projects/peakrent-ai/3.jpg

Notes:
- File extension can be .jpg, .jpeg, .png, or .webp — pick any one per file.
- "cover" is optional — if it's missing, the homepage card just shows the
  existing placeholder instead (nothing breaks).
- The gallery numbers must start at 1 and be consecutive (1, 2, 3, ...) —
  it stops looking as soon as a number is missing.
- If a project has no images at all yet, its case-study page automatically
  falls back to the "Screenshots coming soon" placeholder — you don't need
  to do anything for projects you haven't photographed yet.
- Recommended size: at least 1200px wide, reasonably compressed (a few
  hundred KB, not several MB) so the site stays fast.
