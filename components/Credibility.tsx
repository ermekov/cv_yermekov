import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";

export default function Credibility() {
  const t = useTranslations("credibility");
  const items = t.raw("items") as string[];

  return (
    <div className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-8">
        <Reveal>
          <p className="text-sm text-text-tertiary leading-relaxed">
            <span className="text-text-secondary">{t("label")}</span> — {items.join("  ·  ")}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
