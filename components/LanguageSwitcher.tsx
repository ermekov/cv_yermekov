"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types/i18n";

const DISPLAY_LABEL: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  kk: "KZ",
};

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={`flex items-center ${compact ? "gap-2" : "gap-2.5"} text-[13px] tag-mono`}
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2.5">
          {i > 0 && <span className="text-border-strong" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: l })}
            aria-current={l === locale ? "true" : undefined}
            className={`transition-colors ${
              l === locale ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {DISPLAY_LABEL[l as Locale]}
          </button>
        </span>
      ))}
    </div>
  );
}
