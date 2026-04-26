"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoMark from "./LogoMark";

const TRADETRON_LINK = "https://tradetron.tech/strategy/9631310";

const links = [
  ["Purpose", "#purpose"],
  ["Offering", "#offering"],
  ["Performance", "#performance"],
  ["Testimonials", "#testimonials"],
  ["Pricing", "#pricing"],
  ["Podcasts", "#insights"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 font-bold text-forest" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="leading-tight">ZeroPrediction<br/><span className="text-xs font-semibold text-emeraldDeep">Clarity in Execution. Confidence in Results</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-charcoal/75 transition hover:text-emeraldDeep">{label}</a>)}
          <a href={TRADETRON_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-white shadow-premium transition hover:scale-105">Get Started</a>
        </div>
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && (
        <div className="border-t border-emerald-900/10 bg-white px-5 py-5 shadow-premium md:hidden">
          <div className="grid gap-4">
            {links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="font-semibold text-charcoal">{label}</a>)}
            <a href={TRADETRON_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-forest px-5 py-3 text-center font-bold text-white">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
