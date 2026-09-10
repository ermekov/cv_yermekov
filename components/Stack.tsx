import { useTranslations, useLocale } from "next-intl";
import { stack } from "@/data/stack";
import { pick } from "@/types/i18n";
import type { Locale } from "@/types/i18n";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function Stack() {
  const t = useTranslations("stack");
  const locale = useLocale() as Locale;

  return (
    <section id="stack" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionLabel number="03">{t("eyebrow")}</SectionLabel>
          <h2 className="text-h1 text-text-primary max-w-md mb-14 md:mb-16">{t("heading")}</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 md:gap-8">
          {stack.map((group, i) => (
            <Reveal key={pick(group.label, locale)} delay={i * 60}>
              <div className="pt-4 border-t border-border">
                <h3 className="text-text-primary font-medium mb-2">{pick(group.label, locale)}</h3>
                <p className="text-sm text-text-tertiary leading-relaxed mb-5">{pick(group.description, locale)}</p>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="tag-mono text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
