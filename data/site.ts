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
  linkedin: "https://www.linkedin.com/in/yerassyl-yermekov-08b4b2300/" as string | null,
  whatsapp: "https://wa.me/77089898191?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B5%20%D1%80%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5.%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D0%B8%20%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0",
  telegram: "https://t.me/eeermekov",
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
