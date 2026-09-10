import { useTranslations } from "next-intl";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionLabel number="02">{t("eyebrow")}</SectionLabel>
          <h2 className="text-h1 text-text-primary text-pretty max-w-xl mb-4">{t("heading")}</h2>
          <p className="text-text-secondary max-w-md mb-16 md:mb-20 leading-relaxed">{t("sub")}</p>
        </Reveal>

        <div className="flex flex-col">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} index={i} isLast={i === featuredProjects.length - 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-16 md:mt-20 pt-8 border-t border-border">
            <p className="text-sm text-text-tertiary">
              {t("moreProjectsTitle")} — {t("moreProjectsText")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
