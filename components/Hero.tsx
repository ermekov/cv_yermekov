import { useTranslations, useLocale } from "next-intl";
import { site } from "@/data/site";
import HeroVisual from "@/components/HeroVisual";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");
  const locale = useLocale();

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-20 pb-24 md:pt-28 md:pb-36">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 md:gap-8 items-start">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-9 text-text-secondary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald" />
              </span>
              <span className="text-sm">{t("availability")}</span>
            </div>

            <h1 className="text-display text-text-primary text-pretty max-w-none [&_span]:text-accent-strong">
              {t.rich("headline", { hl: (chunks) => <span>{chunks}</span> })}
            </h1>

            {/* This line is identical in every language on purpose — see data/site.ts */}
            <p className="mt-7 text-[15px] text-text-tertiary">{site.tagline}</p>

            <p className="mt-5 text-lg text-text-secondary max-w-lg leading-relaxed">{t("sub")}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Magnetic>
                <a
                  href={`/${locale}#projects`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-text-primary text-bg text-sm font-medium hover:bg-white transition-colors"
                >
                  {t("viewProjects")}
                </a>
              </Magnetic>
              <a
                href={site.cvPath}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border-strong text-text-primary text-sm font-medium hover:bg-surface transition-colors"
              >
                {t("downloadCv")}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-tertiary">
              <a href={site.github} target="_blank" rel="noreferrer noopener" className="link-underline hover:text-text-secondary">
                {t("github")}
              </a>
              <span className="tag-label text-text-tertiary">{tSite("location")}</span>
              <span className="tag-label text-text-tertiary">{t("classOf", { year: site.graduation.year })}</span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
