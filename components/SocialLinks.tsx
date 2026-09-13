import type { ReactNode } from "react";
import { site } from "@/data/site";

const ICON_SIZE = 19;
const STROKE = 1.5;

function GithubIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M8 10.5V17M8 7.5V7.51" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M12 17v-4a2.2 2.2 0 0 1 4.4 0V17M12 10.5V17" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.3 17.6 4 20l2.5-.7A8.5 8.5 0 1 0 4 12a8.4 8.4 0 0 0 1.2 4.4z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4l.6 1.6c0 .2 0 .3-.1.5l-.5.6c-.1.2-.1.3 0 .5.4.7 1.3 1.6 2 2 .2.1.3.1.5 0l.6-.5c.2-.1.3-.1.5-.1l1.6.6c.3.1.3.3.3.5 0 .2 0 .5-.1.7-.2.4-1 .8-1.4.8-.6 0-1.5-.2-3-.9-1.8-.9-3-2.7-3.1-2.9-.2-.2-1-1.3-1-2.4 0-1.1.6-1.6.8-1.9z"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={STROKE} />
      <path
        d="M7.2 12.1 15.8 8.6c.4-.2.8.1.6.6l-1.4 6.9c-.1.5-.5.6-.8.4l-2.2-1.6-1.1 1c-.1.1-.3.2-.5.1l.2-2.3 4.3-3.8c.2-.2 0-.3-.2-.1l-5.2 3.2-2.2-.7c-.5-.2-.5-.5.3-.7z"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M4.5 7 12 12.5 19.5 7" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconClass =
  "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors";

export default function SocialLinks({
  includeGithub = false,
  includeEmail = false,
}: {
  includeGithub?: boolean;
  includeEmail?: boolean;
}) {
  type SocialLink = { href: string; label: string; icon: ReactNode };
  const links: SocialLink[] = [];

  if (includeGithub) links.push({ href: site.github, label: "GitHub", icon: <GithubIcon /> });
  if (site.linkedin) links.push({ href: site.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> });
  if (site.whatsapp) links.push({ href: site.whatsapp, label: "WhatsApp", icon: <WhatsappIcon /> });
  if (site.telegram) links.push({ href: site.telegram, label: "Telegram", icon: <TelegramIcon /> });
  if (includeEmail) links.push({ href: `mailto:${site.email}`, label: "Email", icon: <MailIcon /> });

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={link.label}
          className={iconClass}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
