"use client";

import { useRef } from "react";

export default function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0, 0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic inline-block ${className}`}
    >
      {children}
    </span>
  );
}
