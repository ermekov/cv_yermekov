import { Localized } from "@/types/i18n";

export interface StackGroup {
  label: Localized;
  description: Localized;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: { en: "Python & Backend", ru: "Python и Backend", kk: "Python және Backend" },
    description: {
      en: "The core of what I build.",
      ru: "Основа того, что я разрабатываю.",
      kk: "Әзірлейтінімнің негізі.",
    },
    items: ["Python", "Django", "FastAPI", "Django REST Framework", "REST API", "SQL"],
  },
  {
    label: { en: "Databases", ru: "Базы данных", kk: "Дерекқорлар" },
    description: {
      en: "Schema design and querying.",
      ru: "Проектирование схем и запросы.",
      kk: "Схема жобалау және сұраныстар.",
    },
    items: ["PostgreSQL", "SQL"],
  },
  {
    label: { en: "AI Engineering", ru: "AI Engineering", kk: "AI Engineering" },
    description: {
      en: "Applied where it earns its place.",
      ru: "Применяю там, где это оправдано.",
      kk: "Орынды жерде ғана қолданамын.",
    },
    items: ["AI integrations", "AI assistants", "Recommendation systems", "Prompt Engineering"],
  },
  {
    label: { en: "Automation & Integrations", ru: "Автоматизация и интеграции", kk: "Автоматтандыру және интеграциялар" },
    description: {
      en: "Connecting systems and channels.",
      ru: "Соединяю системы и каналы.",
      kk: "Жүйелер мен арналарды біріктіремін.",
    },
    items: ["n8n", "Telegram Bot API", "WhatsApp Business API", "Instagram integrations", "Google Sheets API"],
  },
  {
    label: { en: "Tools", ru: "Инструменты", kk: "Құралдар" },
    description: {
      en: "The everyday toolbox.",
      ru: "Повседневный набор инструментов.",
      kk: "Күнделікті қолданатын құралдар жинағы.",
    },
    items: ["Git", "GitHub", "Docker", "Claude Code"],
  },
];
