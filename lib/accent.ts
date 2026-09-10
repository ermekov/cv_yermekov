import { Project } from "@/types/project";

export function accentColorFor(accent: Project["accent"]): string {
  switch (accent) {
    case "violet":
      return "var(--violet)";
    case "amber":
      return "var(--amber)";
    default:
      return "var(--accent-strong)";
  }
}
