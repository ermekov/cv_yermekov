import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/types/i18n";

// Single source of truth for the supported locales lives in types/i18n.ts
// (kept dependency-free from next-intl on purpose, since it's imported by
// every data file). This just wires that list into next-intl's router.
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
