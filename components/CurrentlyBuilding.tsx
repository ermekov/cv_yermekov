import { useTranslations, useLocale } from "next-intl";
import { currentlyBuilding } from "@/data/building";
import { pick, pickList } from "@/types/i18n";
import type { Locale } from "@/types/i18n";
import StatusBadge from "@/components/StatusBadge";
import Reveal from "@/components/Reveal";

export default function CurrentlyBuilding() {
  const t = useTranslations("currentlyBuilding");
  const locale = useLocale() as Locale;

  return (
    <section className="section-pad-tight border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-h2 text-text-primary mb-10 max-w-md">{t("heading")}</h2>
        </Reveal>

        <div className="flex flex-col gap-8 max-w-xl">
          {currentlyBuilding.map((item, i) => (
            <Reveal key={pick(item.title, locale)} delay={i * 70}>
              <div className="flex items-start gap-4">
                <StatusBadge status={item.status} />
                <div>
                  <h3 className="text-text-primary font-medium mb-1.5">{pick(item.title, locale)}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-2">{pick(item.description, locale)}</p>
                  <p className="tag-label text-text-tertiary">{pickList(item.tags, locale).join("  /  ")}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
