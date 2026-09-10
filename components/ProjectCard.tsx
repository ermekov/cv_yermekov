import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Project } from "@/types/project";
import { pick } from "@/types/i18n";
import type { Locale } from "@/types/i18n";
import { accentColorFor } from "@/lib/accent";
import { getProjectCover } from "@/lib/projectImages";
import StatusBadge from "@/components/StatusBadge";
import GalleryPlaceholder from "@/components/GalleryPlaceholder";

export default function ProjectCard({
  project,
  index,
  isLast,
}: {
  project: Project;
  index: number;
  isLast: boolean;
}) {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const accentColor = accentColorFor(project.accent);
  const cover = getProjectCover(project.slug);

  return (
    <div className={`group py-10 md:py-14 ${isLast ? "" : "border-b border-border"}`}>
      <div className="grid md:grid-cols-[64px_1fr] lg:grid-cols-[64px_1fr_220px] gap-4 md:gap-10">
        <span className="tag-mono text-text-tertiary">{String(index + 1).padStart(2, "0")}</span>

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm text-text-tertiary">
            <span>{pick(project.category, locale)}</span>
            <span aria-hidden="true">/</span>
            <StatusBadge status={project.status} />
          </div>

          <Link href={`/projects/${project.slug}`} className="inline-block">
            <h3 className="text-h1 text-text-primary group-hover:text-accent-strong transition-colors text-pretty max-w-xl">
              {pick(project.title, locale)}
            </h3>
          </Link>

          <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">{pick(project.tagline, locale)}</p>

          <p className="mt-6 tag-mono text-text-tertiary">
            {project.technologies.slice(0, 6).join("  /  ")}
          </p>

          <div className="mt-7 flex items-center gap-7">
            <Link
              href={`/projects/${project.slug}`}
              className="link-underline text-sm font-medium"
              style={{ color: accentColor }}
            >
              {t("viewCaseStudy")}
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-sm text-text-tertiary hover:text-text-secondary"
              >
                {t("github")}
              </a>
            )}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="hidden lg:block self-start mt-1"
          tabIndex={-1}
          aria-hidden="true"
        >
          {cover ? (
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src={cover}
                alt=""
                fill
                sizes="220px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <GalleryPlaceholder accent={project.accent} compact />
          )}
        </Link>
      </div>
    </div>
  );
}
