/* "use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Working Professional",
    text: "The performance view is simple to understand and the process feels structured. I liked that the communication is focused on discipline and risk.",
  },
  {
    name: "Neha Verma",
    role: "Retail Investor",
    text: "The subscription flow is clear and easy to follow. It helped me understand what is required before taking the next step.",
  },
  {
    name: "Rohit Mehta",
    role: "Business Owner",
    text: "The site gives a premium and transparent feel. Monthly performance, pricing, and requirements are presented without confusion.",
  },
  {
    name: "Karan Joshi",
    role: "Market Enthusiast",
    text: "I wanted something process-driven, not hype-based. The SwingNifty presentation makes the offering easier to evaluate.",
  },
  {
    name: "Priya Nair",
    role: "Finance Learner",
    text: "The language is simple and the risk disclaimer is clear. It feels much more trustworthy than typical trading pages.",
  },
];

export default function TestimonialsTicker() {
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [...testimonials, ...testimonials];

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = window.innerWidth < 640 ? 300 : 420;

    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setPaused(true);
  };

  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* LEFT BUTTON }
        <button
          type="button"
          aria-label="Scroll testimonials left"
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-gray-50 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT BUTTON }
        <button
          type="button"
          aria-label="Scroll testimonials right"
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-gray-50 sm:h-12 sm:w-12"
        >
          <ChevronRight size={20} />
        </button>

        {/* Gradient fade }
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-white to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-white to-transparent sm:block" />

        {/* SCROLL CONTAINER }
        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide ${
            paused ? "" : "animate-testimonial-marquee"
          }`}
        >
          {items.map((item, index) => (
            <button
              type="button"
              key={`${item.name}-${index}`}
              onClick={() => setPaused((value) => !value)}
              className="group min-w-[82%] shrink-0 rounded-[2rem] border border-emerald-900/10 bg-white p-6 text-left shadow-premium transition hover:-translate-y-1 hover:shadow-glow sm:min-w-[380px] sm:w-[380px]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-forest">
                  <Quote size={20} />
                </div>

                <div className="flex text-emeraldDeep">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="min-h-[112px] text-sm leading-7 text-charcoal/70">
                “{item.text}”
              </p>

              <div className="mt-6 border-t border-emerald-900/10 pt-4">
                <p className="font-black text-charcoal">{item.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-emeraldDeep">
                  {item.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} */