import fs from "fs";
import path from "path";

// Naming convention (see public/projects/README.txt):
//   /public/projects/<slug>/cover.[jpg|jpeg|png|webp]   — homepage card thumbnail
//   /public/projects/<slug>/1.[jpg|jpeg|png|webp]        — case-study gallery, in order
//   /public/projects/<slug>/2...
//
// Everything here runs at build time (these pages are statically generated),
// so dropping a file in and running `npm run build` is enough — no code or
// data-file changes needed to show a real image once it exists.
//
// IMPORTANT: filesystem paths use path.join (OS-specific separator — this
// matters on Windows, where it's a backslash), but the string returned to
// the browser is a URL and must always use forward slashes regardless of
// OS. The two are built separately on purpose; do not merge them.

const EXTENSIONS = ["webp", "jpg", "jpeg", "png"];
const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");

function findExisting(slug: string, name: string): string | null {
  for (const ext of EXTENSIONS) {
    const fileName = `${name}.${ext}`;
    const fileAbsolute = path.join(PROJECTS_DIR, slug, fileName);
    if (fs.existsSync(fileAbsolute)) {
      return `/projects/${slug}/${fileName}`;
    }
  }
  return null;
}

export function getProjectCover(slug: string): string | null {
  return findExisting(slug, "cover");
}

export function getProjectGallery(slug: string, max = 8): string[] {
  const images: string[] = [];
  for (let i = 1; i <= max; i++) {
    const found = findExisting(slug, String(i));
    if (found) images.push(found);
  }
  return images;
}
