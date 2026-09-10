// Locale-independent facts only. All user-facing copy lives in messages/*.json
// so a new project/section never needs a code change to translate — see README.
export const site = {
  name: "Yerassyl Yermekov",
  fullName: "Yermekov Yerassyl Yerkinuly",
  // "Junior Python Developer" is kept as-is in every language on purpose —
  // see the hero headline/tagline components for how each locale frames it
  // in a sentence; the title itself never gets translated.
  title: "Junior Python Developer",
  // The full positioning line is identical in all three languages by design —
  // the career direction (Python → Backend → AI Engineering, with Automation
  // as a supporting focus) must never shift between locales. See the brief:
  // "Do not change my career direction between languages."
  tagline: "Junior Python Developer · Backend · AI Engineering",
  focus: "Backend · AI Engineering",
  // Used for the Person structured-data block (see JsonLd.tsx) and available
  // for any future About-section detail that wants the full institution name.
  university: {
    en: "International Information Technology University (IITU)",
    ru: "Международный университет информационных технологий (IITU)",
    kk: "Халықаралық ақпараттық технологиялар университеті (IITU)",
  },
  graduation: {
    year: "2026",
    period: "2022 – 2026",
  },
  email: "ermekov_erasil@icloud.com",
  github: "https://github.com/ermekov",
  // No LinkedIn profile provided yet — set the real URL here when available.
  // Every component that renders a LinkedIn link checks for this and hides
  // itself automatically when it's null, so nothing gets invented.
  linkedin: null as string | null,
  cvPath: "/cv/Yermekov_Yerassyl_CV.pdf",
  domain: "https://yerassyl.dev",
};

// Section anchors used by the in-page nav. Labels come from messages.nav.*.
export const navSections = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "stack", href: "#stack" },
  { key: "contact", href: "#contact" },
] as const;
