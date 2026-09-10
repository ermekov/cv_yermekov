"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { navSections, site } from "@/data/site";
import BrandMark from "@/components/BrandMark";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navSections
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hrefFor = (anchor: string) => `/${locale}${anchor}`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 h-[68px] flex items-center justify-between">
        <a href={`/${locale}#home`} className="flex items-center gap-2 text-text-primary group">
          <span className="text-text-secondary group-hover:text-accent-strong transition-colors">
            <BrandMark size={18} />
          </span>
          <span className="text-[13px] font-medium tracking-tight hidden sm:inline">{site.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.href}
              href={hrefFor(item.href)}
              className={`relative py-1 text-[13.5px] transition-colors ${
                active === item.href ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary"
              }`}
              aria-current={active === item.href ? "page" : undefined}
            >
              {t(item.key)}
              {active === item.href && (
                <span className="absolute -bottom-[1px] left-0 right-0 h-px bg-accent-strong" aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <LanguageSwitcher />
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <a
            href={site.cvPath}
            download
            className="link-underline text-[13.5px] text-text-secondary hover:text-text-primary transition-colors"
          >
            {t("downloadCv")}
          </a>
          <a
            href={hrefFor("#contact")}
            className="text-[13.5px] px-4 py-2 rounded-full border border-border-strong text-text-primary hover:border-text-primary transition-colors"
          >
            {t("contactCta")}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-8 w-8 text-text-primary"
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <nav className="flex flex-col px-6 py-5 gap-1" aria-label="Mobile">
            {navSections.map((item) => (
              <a
                key={item.href}
                href={hrefFor(item.href)}
                onClick={() => setOpen(false)}
                className={`py-3 text-lg ${active === item.href ? "text-text-primary" : "text-text-tertiary"}`}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <a
                href={site.cvPath}
                download
                onClick={() => setOpen(false)}
                className="text-sm text-text-secondary"
              >
                {t("downloadCv")}
              </a>
              <a
                href={hrefFor("#contact")}
                onClick={() => setOpen(false)}
                className="inline-flex w-fit text-sm px-4 py-2.5 rounded-full border border-border-strong text-text-primary"
              >
                {t("contactCta")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
