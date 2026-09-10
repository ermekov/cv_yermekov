import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto max-w-2xl px-6 md:px-8 py-32 text-center flex flex-col items-center gap-5">
      <span className="tag-mono text-text-tertiary">404</span>
      <h1 className="text-h1 text-text-primary">{t("title")}</h1>
      <p className="text-text-secondary leading-relaxed max-w-md">{t("description")}</p>
      <Link
        href="/"
        className="mt-3 inline-flex items-center px-6 py-3 rounded-full bg-text-primary text-bg text-sm font-medium hover:bg-white transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
