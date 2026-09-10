import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Credibility from "@/components/Credibility";
import Stack from "@/components/Stack";
import Certificates from "@/components/Certificates";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Credibility />
      <Stack />
      <CurrentlyBuilding />
      <Certificates />
      <Contact />
    </>
  );
}
