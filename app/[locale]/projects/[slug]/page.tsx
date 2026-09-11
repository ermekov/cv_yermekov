import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { projects, getProjectBySlug } from "@/data/projects";
import { site } from "@/data/site";
import { pick, pickList } from "@/types/i18n";
import type { Locale } from "@/types/i18n";
import { accentColorFor } from "@/lib/accent";
import { getProjectGallery } from "@/lib/projectImages";
import StatusBadge from "@/components/StatusBadge";
import GalleryPlaceholder from "@/components/GalleryPlaceholder";
import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = pick(project.title, locale as Locale);
  const tagline = pick(project.tagline, locale as Locale);

  return {
    title,
    description: tagline,
    alternates: {
      canonical: `${site.domain}/${locale}/projects/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${site.domain}/${l}/projects/${slug}`])
      ),
    },
    openGraph: {
      title: `${title} — ${site.name}`,
      description: tagline,
      url: `${site.domain}/${locale}/projects/${project.slug}`,
      locale,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "projectPage" });
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const accentColor = accentColorFor(project.accent);
  const l = locale as Locale;
  const gallery = getProjectGallery(project.slug);

  return (
    <article>
      {/* Hero */}
      <header className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <Link
            href="/#projects"
            className="link-underline inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary mb-10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("allProjects")}
          </Link>

          <div className="flex items-center gap-3 mb-6 text-sm text-text-tertiary">
            <span>{pick(project.category, l)}</span>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
            <span aria-hidden="true">/</span>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="text-display text-text-primary text-pretty mb-6">
            {pick(project.title, l)}
          </h1>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-9">
            {pick(project.tagline, l)}
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-text-primary text-bg text-sm font-medium hover:bg-white transition-colors"
              >
                {t("viewOnGithub")}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-sm text-text-secondary hover:text-text-primary"
              >
                {t("liveDemo")}
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-20 flex flex-col gap-16 md:gap-20">
        {/* Overview */}
        <Reveal>
          <div className="flex flex-wrap gap-x-12 gap-y-6 pb-14 md:pb-16 border-b border-border">
            {project.stats.map((stat) => (
              <div key={pick(stat.label, l)}>
                <p className="tag-label text-text-tertiary mb-2">{pick(stat.label, l)}</p>
                <p className="text-text-primary font-medium">{pick(stat.value, l)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Problem / Solution */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-h2 text-text-primary mb-3">{t("problem")}</h2>
              <p className="text-text-secondary leading-relaxed">{pick(project.problem, l)}</p>
            </div>
            <div>
              <h2 className="text-h2 text-text-primary mb-3">{t("solution")}</h2>
              <p className="text-text-secondary leading-relaxed">{pick(project.solution, l)}</p>
            </div>
          </div>
        </Reveal>

        {/* Architecture — rendered as a flow, not a card grid */}
        <Reveal>
          <div>
            <h2 className="text-h2 text-text-primary mb-10">{t("architecture")}</h2>
            <div className="relative pl-8">
              <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-border" aria-hidden="true" />
              <div className="flex flex-col gap-8">
                {project.architecture.map((note) => (
                  <div key={pick(note.title, l)} className="relative grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8">
                    <span
                      className="absolute -left-8 top-[5px] h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: accentColor }}
                      aria-hidden="true"
                    />
                    <p className="text-text-primary font-medium">{pick(note.title, l)}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{pick(note.detail, l)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Features */}
        <Reveal>
          <div>
            <h2 className="text-h2 text-text-primary mb-8">{t("keyFeatures")}</h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {pickList(project.features, l).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed border-t border-border pt-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Tech stack */}
        <Reveal>
          <div>
            <h2 className="text-h2 text-text-primary mb-8">{t("technologyStack")}</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {project.techGroups.map((group) => (
                <div key={pick(group.label, l)}>
                  <p className="text-sm text-text-tertiary mb-3">{pick(group.label, l)}</p>
                  <p className="tag-mono text-text-secondary leading-relaxed">{group.items.join("  /  ")}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Challenges / learned */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-h2 text-text-primary mb-3">{t("challenges")}</h2>
              <p className="text-text-secondary leading-relaxed">{pick(project.challenges, l)}</p>
            </div>
            <div>
              <h2 className="text-h2 text-text-primary mb-3">{t("whatILearned")}</h2>
              <p className="text-text-secondary leading-relaxed">{pick(project.learned, l)}</p>
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal>
          <div>
            <h2 className="text-h2 text-text-primary mb-8">{t("screenshots")}</h2>
            {gallery.length > 0 ? (
              <ProjectGallery images={gallery} alt={pick(project.title, l)} />
            ) : (
              <GalleryPlaceholder accent={project.accent} />
            )}
          </div>
        </Reveal>
      </div>

      {/* Next project */}
      <div className="border-t border-border">
        <Link
          href={`/projects/${next.slug}`}
          className="group block mx-auto max-w-3xl px-6 md:px-8 py-14 md:py-16"
        >
          <p className="tag-label text-text-tertiary mb-3">{t("nextProject")}</p>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-h1 text-text-primary group-hover:text-accent-strong transition-colors">
              {pick(next.title, l)}
            </h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="shrink-0 transition-transform group-hover:translate-x-1 text-text-tertiary"
              aria-hidden="true"
            >
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}
