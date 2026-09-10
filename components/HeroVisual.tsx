import { useTranslations } from "next-intl";

export default function HeroVisual() {
  const t = useTranslations("heroVisual");

  const stages = [
    { label: t("stagePython"), note: t("stagePythonNote") },
    { label: t("stageApi"), note: t("stageApiNote") },
    { label: t("stageAi"), note: t("stageAiNote") },
    { label: t("stageAutomation"), note: t("stageAutomationNote") },
    { label: t("stageBusiness"), note: t("stageBusinessNote") },
  ];

  return (
    <div
      className="relative w-full md:w-64 pt-2 md:pt-8"
      role="img"
      aria-label={t("ariaLabel")}
    >
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
        <span className="tag-label text-text-tertiary">{t("flowLabel")}</span>
        <span className="flex items-center gap-1.5 tag-label text-emerald">
          <span className="h-1 w-1 rounded-full bg-emerald" />
          {t("statusValue")}
        </span>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-[3px] top-1 bottom-1 w-px bg-border-strong" aria-hidden="true">
          <span
            className="pulse-dot absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-accent-strong"
            style={{ boxShadow: "0 0 8px rgba(109, 123, 255, 0.7)" }}
            aria-hidden="true"
          />
        </div>

        <ul className="flex flex-col gap-8">
          {stages.map((stage) => (
            <li key={stage.label} className="relative">
              <span
                className="absolute -left-6 top-[3px] h-[7px] w-[7px] rounded-full bg-bg ring-1 ring-border-strong"
                aria-hidden="true"
              />
              <p className="font-medium text-text-primary leading-none">{stage.label}</p>
              <p className="tag-label text-text-tertiary mt-1.5">{stage.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
