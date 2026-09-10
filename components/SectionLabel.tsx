export default function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label mb-5">
      <span className="num">{number}</span>
      <span>{children}</span>
    </div>
  );
}
