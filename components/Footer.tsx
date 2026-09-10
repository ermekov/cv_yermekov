import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex items-start gap-3">
          <span className="text-text-tertiary mt-0.5">
            <BrandMark size={16} />
          </span>
          <div>
            <p className="text-text-primary font-medium mb-1">{site.name}</p>
            <p className="text-sm text-text-tertiary">
              {site.title} · {site.focus}
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-6" aria-label="Footer">
          <a href={site.github} target="_blank" rel="noreferrer noopener" className="link-underline text-sm text-text-secondary hover:text-text-primary transition-colors">
            {t("github")}
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="link-underline text-sm text-text-secondary hover:text-text-primary transition-colors">
              {t("linkedin")}
            </a>
          )}
          <a href={`mailto:${site.email}`} className="link-underline text-sm text-text-secondary hover:text-text-primary transition-colors">
            {t("email")}
          </a>
        </nav>

        <p className="text-xs text-text-tertiary">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
