"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";

const testimonials = [
  {
    name: "Gaurav Karwa",
    role: "Founder, Bix42",
    image: "/testimonials/GauravKarva.jpeg",
    text: "I have known Siddharth for more than 15 years now. His technical knowledge of the stock market has been impressive over the last couple of years. He has been able to generate good profit for me without me doing anything.",
  },
  {
    name: "Ankita Jain",
    role: "Specialist, Data & Analytics",
    image: "/testimonials/AnkitaJain.jpeg",
    text: "I am extremely satisfied with the way my investments have been handled by Siddharth Bisen. His professional approach, transparency and deep understanding of the market have given me complete confidence in my investments.",
  },
  {
    name: "Ankur Gupta",
    role: "Director",
    image: "/testimonials/AnkurGupta.jpeg",
    text: "I am completely satisfied with the way Siddharth has handled my investments. Watching my portfolio grow alongside his guidance has been a great experienceThank you Siddharth and all the best.",
  },
  {
    name: "Disha Yede",
    role: "Sustainable Specialist",
    image: "/testimonials/DishaYede.jpeg",
    text: "I started trading with no idea what I was doing, and finding Siddharth honestly made things so much easier. He explains things clearly, and I’ve seen real progress. Really grateful for his support—highly recommend!",
  },
  {
    name: "Dolly Periwal",
    role: "Founder, Bix42",
    image: "/testimonials/DollyPeriwal.jpeg",
    text: "Siddharth transformed my approach to investing with his sharp market insights and hands-on guidance. From day one, his transparency and proven strategies delivered steady growth in my portfolio. Highly recommend him for anyone serious about trading success!",
  },
  {
    name: "Rajesh Dadugu",
    role: "Senior Consultant",
    image: "/testimonials/RajeshDadugu.jpeg",
    text: "I started my trading journey with zero knowledge, and I’m truly grateful to have found a financial advisor Siddharth who guided me every step of the way. Siddharth’s expertise, patience, and clear strategies made a huge difference—not only did I learn, but I also saw consistent profits.He handled everything with professionalism and transparency, which gave me complete confidence throughout the process. Highly appreciate Siddharth’s dedication and support—definitely someone you can trust if you're stepping into trading!",
  },
];

function TestimonialCard({
  item,
  featured = false,
}: {
  item: (typeof testimonials)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2rem] border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.14)] ${
        featured
          ? "border-emerald-300 ring-1 ring-emerald-200 lg:scale-[1.04]"
          : "border-emerald-900/10"
      }`}
    >
      {/* Top image band */}
      <div className="relative h-36 bg-gradient-to-br from-forest via-emeraldDeep to-emerald-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%)]" />

        <div className="absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-mintSoft shadow-xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-top"
            sizes="96px"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-16 text-center">
        <div className="mx-auto mb-3 flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>

        <h3 className="text-lg font-black text-charcoal">{item.name}</h3>

        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-emeraldDeep">
          {item.role}
        </p>

        <div className="mx-auto my-5 grid h-10 w-10 place-items-center rounded-full bg-mintSoft text-emeraldDeep">
          <Quote size={18} />
        </div>

        <p className="flex-1 text-sm leading-7 text-charcoal/70">
          “{item.text}”
        </p>

        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">
            <ShieldCheck size={14} />
            Verified feedback
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsProfessional() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = testimonials.length;

  const visibleTestimonials = useMemo(() => {
    const prev = (activeIndex - 1 + total) % total;
    const current = activeIndex;
    const next = (activeIndex + 1) % total;

    return [
      { item: testimonials[prev], position: "side" },
      { item: testimonials[current], position: "center" },
      { item: testimonials[next], position: "side" },
    ];
  }, [activeIndex, total]);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section
      id="testimonials"
      className="bg-mintSoft px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        

        <div className="relative mx-auto max-w-6xl">
          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-emerald-900/10 bg-white text-charcoal shadow-lg transition hover:-translate-y-[52%] hover:shadow-xl md:grid"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-emerald-900/10 bg-white text-charcoal shadow-lg transition hover:-translate-y-[52%] hover:shadow-xl md:grid"
          >
            <ChevronRight size={22} />
          </button>

          {/* Desktop 3-card slider */}
          <div className="hidden grid-cols-3 items-center gap-6 md:grid">
            {visibleTestimonials.map(({ item, position }) => (
              <div
                key={`${item.name}-${position}`}
                className={
                  position === "center"
                    ? "z-10"
                    : "scale-[0.94] opacity-80 transition"
                }
              >
                <TestimonialCard item={item} featured={position === "center"} />
              </div>
            ))}
          </div>

          {/* Mobile single-card slider */}
          <div className="md:hidden">
            <TestimonialCard item={testimonials[activeIndex]} featured />
          </div>

          {/* Mobile arrows */}
          <div className="mt-6 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-emerald-900/10 bg-white text-charcoal shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-emerald-900/10 bg-white text-charcoal shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-emeraldDeep"
                    : "w-2.5 bg-emerald-200 hover:bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}