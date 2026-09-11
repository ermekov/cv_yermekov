"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const TRANSITION_MS = 220;

export default function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const openAt = (i: number) => {
    setOpenIndex(i);
    // Mount first (opacity/scale at the "closed" values), then flip to the
    // "open" values on the next frame so the browser actually animates the
    // change instead of snapping straight to the end state.
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const close = useCallback(() => {
    setVisible(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setOpenIndex(null), reduced ? 0 : TRANSITION_MS);
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + images.length) % images.length;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-border cursor-zoom-in"
            aria-label={`${alt} — ${i + 1}/${images.length}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 transition-opacity duration-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "rgba(4, 5, 7, 0.92)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <div
            className={`relative w-full max-w-4xl aspect-[16/10] transition-all duration-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={images[openIndex]} alt={alt} fill sizes="90vw" className="object-contain" priority />
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 tag-mono text-white/60">
              {openIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
