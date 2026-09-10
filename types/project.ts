import { Localized, LocalizedList } from "@/types/i18n";

export type ProjectStatus = "completed" | "building" | "in-progress" | "experiment" | "planned";

export interface ArchitectureNote {
  title: Localized;
  detail: Localized;
}

export interface ProjectStat {
  label: Localized;
  value: Localized;
}

export interface TechGroup {
  label: Localized;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: Localized;
  category: Localized;
  year: string;
  status: ProjectStatus;
  tagline: Localized;
  description: Localized;
  problem: Localized;
  solution: Localized;
  features: LocalizedList;
  technologies: string[];
  techGroups: TechGroup[];
  architecture: ArchitectureNote[];
  challenges: Localized;
  learned: Localized;
  stats: ProjectStat[];
  github?: string;
  demo?: string;
  featured: boolean;
  accent: "blue" | "violet" | "amber";
}
