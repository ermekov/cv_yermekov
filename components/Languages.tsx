import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations("languages");

  const languages = [
    { name: t("kazakhName"), level: t("kazakhLevel") },
    { name: t("russianName"), level: t("russianLevel") },
    { name: t("englishName"), level: t("englishLevel") },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-baseline gap-1.5 text-sm">
          <span className="text-text-primary">{lang.name}</span>
          <span className="text-text-tertiary">— {lang.level}</span>
        </div>
      ))}
    </div>
  );
}
