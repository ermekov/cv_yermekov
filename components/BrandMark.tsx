export default function BrandMark({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 4L12 13.5L20 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M12 13.5V20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <circle cx="12" cy="13.5" r="1.4" fill="var(--accent)" stroke="none" />
    </svg>
  );
}
