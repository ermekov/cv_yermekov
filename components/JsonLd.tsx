import { site } from "@/data/site";
import { pick } from "@/types/i18n";
import type { Locale } from "@/types/i18n";

export default function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.fullName,
    jobTitle: site.title,
    url: `${site.domain}/${locale}`,
    email: `mailto:${site.email}`,
    sameAs: [site.github, ...(site.linkedin ? [site.linkedin] : [])],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: pick(site.university, locale),
    },
    knowsAbout: ["Python", "Django", "FastAPI", "PostgreSQL", "REST APIs", "AI Engineering", "Automation"],
  };

  return (
    <script
      type="application/ld+json"
      // Safe: every value above comes from static, developer-controlled
      // data (data/site.ts), never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
