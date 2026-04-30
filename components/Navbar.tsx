"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoMark from "./LogoMark";

const links = [
  ["Purpose", "purpose"],
  ["Offering", "offering"],
  ["Performance", "performance"],
  ["About", "about"],
  ["Podcasts", "insights"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    }

    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex items-center gap-3 text-left font-bold text-forest"
          onClick={() => scrollToSection("hero")}
        >
          <LogoMark />
          <span className="leading-tight">
            ZeroPrediction
            <br />
            <span className="text-xs font-semibold text-emeraldDeep">
              Your Gateway to Extra Income
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm font-semibold text-charcoal/75 transition hover:text-emeraldDeep"
            >
              {label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-white shadow-premium transition hover:scale-105"
          >
            Get Started
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="space-y-4 border-t bg-white px-4 py-4 md:hidden">
          {links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-sm font-semibold text-charcoal/75"
            >
              {label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="block w-full rounded-full bg-forest px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}