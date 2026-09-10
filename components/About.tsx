import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  const t = useTranslations("about");
  const tSite = useTranslations("site");

  const facts = [
    { label: site.graduation.year, value: t("factGraduate") },
    { label: t("factCurrently"), value: site.title },
    { label: t("factFocus"), value: site.focus },
    { label: t("factBasedIn"), value: tSite("location") },
  ];

  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionLabel number="01">{t("eyebrow")}</SectionLabel>
        </Reveal>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-20">
          <Reveal>
            <h2 className="text-h1 text-text-primary text-pretty max-w-md">{t("heading")}</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="max-w-md">
              <p className="text-text-secondary leading-relaxed mb-4">{t("paragraph1")}</p>
              <p className="text-text-secondary leading-relaxed">{t("paragraph2")}</p>

              <dl className="mt-10 flex flex-col">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 py-3.5 border-t border-border first:border-t-0"
                  >
                    <dt className="text-sm text-text-tertiary">{fact.label}</dt>
                    <dd className="text-sm text-text-primary font-medium text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 pl-4 border-l-2 text-sm text-text-secondary leading-relaxed" style={{ borderColor: "var(--accent-strong)" }}>
                {t("careerGoal")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
