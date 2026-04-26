"use client";

import { Quote, Star } from "lucide-react";
import { useState } from "react";

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
  const items = [...testimonials, ...testimonials];

  return (
    <div className="mx-auto max-w-7xl overflow-hidden">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-charcoal/55">Click any testimonial to pause or resume the smooth crawler.</p>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-sm font-extrabold text-forest shadow-sm transition hover:scale-105"
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
        <div
          className={`flex w-max gap-5 ${paused ? "" : "animate-testimonial-marquee"}`}
        >
          {items.map((item, index) => (
            <button
              type="button"
              key={`${item.name}-${index}`}
              onClick={() => setPaused((value) => !value)}
              className="group w-[320px] rounded-[2rem] border border-emerald-900/10 bg-white p-6 text-left shadow-premium transition hover:-translate-y-1 hover:shadow-glow sm:w-[380px]"
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
              <p className="min-h-[112px] text-sm leading-7 text-charcoal/70">“{item.text}”</p>
              <div className="mt-6 border-t border-emerald-900/10 pt-4">
                <p className="font-black text-charcoal">{item.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-emeraldDeep">{item.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
