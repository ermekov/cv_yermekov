import { useTranslations } from "next-intl";
import { certificates } from "@/data/certificates";
import Reveal from "@/components/Reveal";

const years = Array.from(new Set(certificates.map((c) => c.year))).sort((a, b) => Number(b) - Number(a));

export default function Certificates() {
  const t = useTranslations("certificates");

  const categoryLabel = (category: string) => {
    switch (category) {
      case "ai":
        return t("categoryAI");
      case "web":
        return t("categoryWeb");
      case "design":
        return t("categoryDesign");
      default:
        return t("categoryComputerScience");
    }
  };

  return (
    <section className="section-pad-tight border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-h2 text-text-primary mb-12 max-w-md">{t("heading")}</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
          {years.map((year, i) => (
            <Reveal key={year} delay={i * 70}>
              <p className="tag-mono text-text-tertiary mb-4">{year}</p>
              <ul className="flex flex-col gap-3">
                {certificates
                  .filter((c) => c.year === year)
                  .map((cert) => (
                    <li key={cert.title} className="text-sm text-text-secondary leading-relaxed border-l-2 border-border pl-3">
                      <span className="text-text-primary">{cert.title}</span>
                      <span className="block tag-label text-text-tertiary mt-0.5">{categoryLabel(cert.category)}</span>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
