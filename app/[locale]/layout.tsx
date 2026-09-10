import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { site } from "@/data/site";
import type { Locale } from "@/types/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = localFont({
  src: "../../public/fonts/Inter.ttf",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../../public/fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languageAlternates = Object.fromEntries(
    routing.locales.map((l) => [l, `${site.domain}/${l}`])
  );
  languageAlternates["x-default"] = `${site.domain}/${routing.defaultLocale}`;

  return {
    metadataBase: new URL(site.domain),
    title: {
      default: t("titleDefault"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "Yerassyl Yermekov",
      "Ерасыл Ермеков",
      "Junior Python Developer",
      "Backend Developer",
      "Python Developer",
      "AI Engineering",
      "Django",
      "FastAPI",
      "IITU",
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: {
      canonical: `${site.domain}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: `${site.domain}/${locale}`,
      title: t("titleDefault"),
      description: t("description"),
      siteName: site.name,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleDefault"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-bg text-text-primary antialiased flex flex-col">
        <JsonLd locale={locale as Locale} />
        <NextIntlClientProvider>
          <SkipLink locale={locale as Locale} />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

async function SkipLink({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "nav" });
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
    >
      {t("skipToContent")}
    </a>
  );
}
