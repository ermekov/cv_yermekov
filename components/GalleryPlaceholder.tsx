import { useTranslations } from "next-intl";

import { accentColorFor } from "@/lib/accent";

export default function GalleryPlaceholder({
  accent,
  compact = false,
}: {
  accent: "blue" | "violet" | "amber";
  compact?: boolean;
}) {
  const t = useTranslations("gallery");
  const color = accentColorFor(accent);

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className={`flex items-center gap-1.5 border-b border-border ${compact ? "px-3 py-2" : "px-4 py-3"}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
      </div>
      <div
        className={`flex flex-col items-center justify-center text-center ${
          compact ? "gap-1.5 py-8 px-4" : "gap-3 py-20 md:py-28 px-6"
        }`}
      >
        <span
          className={`tag-label uppercase tracking-[0.08em] ${compact ? "text-[10px]" : ""}`}
          style={{ color }}
        >
          {t("label")}
        </span>
        {!compact && <p className="text-text-secondary">{t("comingSoon")}</p>}
        {!compact && <p className="tag-label text-text-tertiary max-w-xs">{t("instructions")}</p>}
      </div>
    </div>
  );
}
