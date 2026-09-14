"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import Languages from "@/components/Languages";
import Magnetic from "@/components/Magnetic";
import SectionLabel from "@/components/SectionLabel";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Google Apps Script Web Apps don't reply with CORS headers, so the
      // response here is opaque — we can't read success/error out of it.
      // "no-cors" + text/plain avoids a CORS preflight that Apps Script
      // doesn't handle; the script itself still gets a normal JSON body
      // via e.postData.contents. A resolved fetch (no throw) means the
      // request reached Google; a genuine failure (offline, blocked, etc.)
      // throws and lands in the catch block below.
      await fetch(site.formEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionLabel number="04">{t("eyebrow")}</SectionLabel>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <Reveal>
              <h2 className="text-h1 text-text-primary text-pretty max-w-md mb-5">{t("heading")}</h2>
              <p className="text-text-secondary leading-relaxed mb-10 max-w-sm">{t("sub")}</p>
            </Reveal>

            <Reveal delay={80}>
              <Magnetic>
                <a
                  href={site.cvPath}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-text-primary text-bg text-sm font-medium hover:bg-white transition-colors"
                >
                  {t("downloadCv")}
                </a>
              </Magnetic>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
                <a href={site.github} target="_blank" rel="noreferrer noopener" className="link-underline hover:text-text-primary">
                  {t("github")}
                </a>
                <a href={`mailto:${site.email}`} className="link-underline hover:text-text-primary">
                  {site.email}
                </a>
                {site.linkedin && (
                  <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="link-underline hover:text-text-primary">
                    {t("linkedin")}
                  </a>
                )}
              </div>

              <div className="mt-5">
                <SocialLinks />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-14 pt-6 border-t border-border max-w-sm">
                <p className="tag-mono text-text-tertiary mb-3">{t("languagesLabel")}</p>
                <Languages />
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div>
                <label htmlFor="name" className="tag-mono text-text-tertiary block mb-2">
                  {t("formName")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  disabled={status === "sending"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-0 border-b border-border bg-transparent pb-2.5 text-text-primary placeholder:text-text-tertiary focus:border-accent-strong outline-none transition-colors disabled:opacity-50"
                  placeholder={t("formNamePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="email" className="tag-mono text-text-tertiary block mb-2">
                  {t("formEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={status === "sending"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-0 border-b border-border bg-transparent pb-2.5 text-text-primary placeholder:text-text-tertiary focus:border-accent-strong outline-none transition-colors disabled:opacity-50"
                  placeholder={t("formEmailPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="message" className="tag-mono text-text-tertiary block mb-2">
                  {t("formMessage")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  disabled={status === "sending"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-0 border-b border-border bg-transparent pb-2.5 text-text-primary placeholder:text-text-tertiary focus:border-accent-strong outline-none transition-colors disabled:opacity-50 resize-none"
                  placeholder={t("formMessagePlaceholder")}
                />
              </div>
              <div className="flex items-center justify-between gap-4 mt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="link-underline text-sm font-medium text-text-primary disabled:opacity-50"
                >
                  {status === "sending" ? t("sending") : t("send")}
                </button>
                <p
                  className={`text-xs ${
                    status === "success" ? "text-emerald" : status === "error" ? "text-amber" : "text-text-tertiary"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" ? t("formSuccess") : status === "error" ? t("formError") : t("formNote")}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
