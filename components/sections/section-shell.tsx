import { ReactNode } from "react";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-shell py-16 md:py-24">
      <div className="mb-10">
        <div className="mb-4 text-xs font-medium uppercase tracking-[0.34em] text-sky-300">{eyebrow}</div>
        <h2 className="section-heading">{title}</h2>
        {description ? <p className="section-copy mt-4">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
