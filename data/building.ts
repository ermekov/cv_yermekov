import { Localized, LocalizedList } from "@/types/i18n";

export interface BuildingItem {
  title: Localized;
  description: Localized;
  status: "building" | "in-progress" | "experiment" | "planned";
  tags: LocalizedList;
}

export const currentlyBuilding: BuildingItem[] = [
  {
    title: {
      en: "AI-powered business automation",
      ru: "Автоматизация бизнеса на основе AI",
      kk: "AI негізіндегі бизнесті автоматтандыру",
    },
    description: {
      en: "Building practical AI assistants and automation workflows while developing deeper expertise in Python backend development and AI engineering.",
      ru: "Разрабатываю практичных AI-ассистентов и автоматизированные workflow, углубляя экспертизу в Python backend-разработке и AI engineering.",
      kk: "Практикалық AI-ассистенттер мен автоматтандырылған workflow-тар әзірлей отырып, Python backend әзірлеу және AI engineering бойынша білімімді тереңдетіп жатырмын.",
    },
    status: "building",
    tags: {
      en: ["Python", "AI Engineering", "Automation"],
      ru: ["Python", "AI Engineering", "Автоматизация"],
      kk: ["Python", "AI Engineering", "Автоматтандыру"],
    },
  },
];
