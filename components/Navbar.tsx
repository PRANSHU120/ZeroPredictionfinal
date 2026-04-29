"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoMark from "./LogoMark";

const links = [
  ["Purpose", "#purpose"],
  ["Offering", "#offering"],
  ["Performance", "#performance"],
 /*  ["Testimonials", "#testimonials"], */
  ["About", "#about"],
  ["Podcasts", "#insights"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-3 font-bold text-forest"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span className="leading-tight">
            ZeroPrediction
            <br />
            <span className="text-xs font-semibold text-emeraldDeep">
              Your Gateway to Extra Income
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-charcoal/75 transition hover:text-emeraldDeep"
            >
              {label}
            </a>
          ))}

          <a
            href="#pricing"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-white shadow-premium transition hover:scale-105"
          >
            Get Started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="space-y-4 border-t bg-white px-4 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-charcoal/75"
            >
              {label}
            </a>
          ))}

          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-forest px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}