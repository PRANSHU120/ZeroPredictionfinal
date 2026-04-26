import { ReactNode } from "react";

export default function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.28em] text-emeraldDeep">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-charcoal sm:text-4xl lg:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-lg leading-8 text-charcoal/68">{children}</p>}
    </div>
  );
}
