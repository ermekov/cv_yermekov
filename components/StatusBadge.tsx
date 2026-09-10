import { useTranslations } from "next-intl";

const STATUS_COLOR: Record<string, string> = {
  completed: "var(--emerald)",
  building: "var(--accent-strong)",
  "in-progress": "var(--accent-strong)",
  experiment: "var(--amber)",
  planned: "var(--text-tertiary)",
};

const STATUS_KEY: Record<string, string> = {
  completed: "completed",
  building: "building",
  "in-progress": "inProgress",
  experiment: "experiment",
  planned: "planned",
};

export default function StatusBadge({ status }: { status: string }) {
  const t = useTranslations("status");
  const color = STATUS_COLOR[status] ?? STATUS_COLOR.planned;
  const key = STATUS_KEY[status] ?? "planned";

  return (
    <span className="inline-flex items-center gap-1.5 tag-label">
      <span
        className="h-1.5 w-1.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {t(key)}
    </span>
  );
}
