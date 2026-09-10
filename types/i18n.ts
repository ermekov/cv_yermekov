export const locales = ["en", "ru", "kk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Localized = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value[defaultLocale];
}

export function pickList(value: LocalizedList, locale: Locale): string[] {
  return value[locale] ?? value[defaultLocale];
}
