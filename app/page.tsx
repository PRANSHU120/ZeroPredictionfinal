"use client";

import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
  PhoneCall,
  IndianRupee,
  BadgeCheck,
  Briefcase,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import TradingDashboard from "../components/TradingDashboard";
import BrowserBackScrollHandler from "../components/BrowserBackScrollHandler";
import PerformanceTable from "../components/PerformanceTable";
/* import TestimonialsTicker from "../components/TestimonialsTicker"; */

const TRADETRON_LINK = "https://tradetron.tech/strategy/9631310";
const EMAIL = "support@zeroprediction.in";
const WHATSAPP_NUMBER = "9650982322";
const WHATSAPP_LINK = "https://wa.me/919650982322";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const heroText: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: smoothEase },
  },
};

const heroVisual: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.15, ease: smoothEase },
  },
};

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: smoothEase },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const buttonMotion = {
  whileHover: { scale: 1.04, y: -2 },
  whileTap: { scale: 0.98 },
  transition: {
    type: "spring" as const,
    stiffness: 260,
    damping: 18,
  },
};

const podcastVideos = [
  {
    title: "In Conversation with Rupeezy CEO Shauryam Gupta",
    url: "https://youtu.be/8h3IRXYgXu4?si=ubEQ4uZkJPWje4dt",
    id: "8h3IRXYgXu4",
    label: "Podcast",
  },
  {
    title: "A Dialogue with Aseem Juneja (Founder, A Digital Blogger)",
    url: "https://youtu.be/R5_iKdkcdPU?si=9PyvZJ3KTyhRHyjd",
    id: "R5_iKdkcdPU",
    label: "Podcast",
  },
];

const pillars = [
  {
    title: "Rule-Based Entry",
    text: "Signals are designed around predefined conditions to avoid emotion-led decisions.",
  },
  {
    title: "Planned Exit",
    text: "Exit logic is defined before execution, so the process stays structured.",
  },
  {
    title: "Market-Adaptation",
    text: "The approach is reviewed with changing market behaviour instead of fixed assumptions.",
  },
  {
    title: "Defined Risk",
    text: "Placing risk at the core of every decision-making, we ensure capital protection remains the top priority.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <BrowserBackScrollHandler />

      <section
        id="hero"
        className="relative min-h-screen bg-radialMint px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 chart-grid"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.03fr_.97fr]">
          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.55, ease: smoothEase }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-bold text-forest shadow-sm backdrop-blur"
            >
              <Sparkles size={16} /> Exclusively Trading Nifty Futures via
              Tradetron
            </motion.div>

            <h1 className="text-4xl font-black tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Disciplined Trading Built for Passive Income Seekers
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70 sm:text-xl">
              A structured trading system with clear entries, planned exits,
              risk management, and market-adaptive execution — designed for
              people looking for an extra income source without giving time to
              daily trading.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <motion.a
                {...buttonMotion}
                href="#pricing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-extrabold text-white shadow-glow"
              >
                Get Started <ArrowRight size={18} />
              </motion.a>

              <motion.a
                {...buttonMotion}
                href={TRADETRON_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white px-7 py-4 font-extrabold text-forest shadow-sm"
              >
                Suscribe Strategy
              </motion.a>

              

              <motion.a
                {...buttonMotion}
                href="#performance"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white px-7 py-4 font-extrabold text-forest shadow-sm"
              >
                View Performance
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={heroVisual} initial="hidden" animate="visible">
            <TradingDashboard />
          </motion.div>
        </div>
      </section>

      <motion.section
        id="purpose"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Our Purpose"
          title="An additional income stream that requires no extra time"
        >
          We help people generate an extra source of income without giving time
          to daily market tracking, while keeping the experience disciplined and
          transparent.
        </SectionHeader>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: UsersRound,
              title: "Passive Income Seekers",
              text: "Providing a structured high-clarity trading service that allows one to generate extra income.",
            },
            {
              icon: Briefcase,
              title: "Working Professionals",
              text: "Tailored for career-driven individuals seeking a transparent approach to a disciplined trading system.",
            },
            {
              icon: ShieldCheck,
              title: "Disciplined Subscribers",
              text: "Built for users who value process, risk awareness, and clean execution over noisy market tips.",
            },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={cardReveal}
                whileHover={{ y: -7, scale: 1.018 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-[2rem] border border-emerald-900/10 bg-mintSoft p-8 shadow-premium"
              >
                <Icon className="mb-5 text-emeraldDeep" />
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/65">{card.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="offering"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="bg-mintSoft px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Our Offering"
          title="SwingNifty: A specialized system focused exclusively on Nifty Futures Swing Trading"
        />

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardReveal}
              whileHover={{ y: -7, scale: 1.018 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-premium"
            >
              <motion.div
                whileHover={{ rotate: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-mint text-forest"
              >
                <ShieldCheck />
              </motion.div>
              <h3 className="text-xl font-black">{p.title}</h3>
              <p className="mt-3 leading-7 text-charcoal/65">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="performance"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Strategy Performance"
          title="Monthly Profits & Losses"
        >
          Transparent results, simplified for an honest and confident evaluation
          of our trading system.
        </SectionHeader>

        <motion.div
          variants={softScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <PerformanceTable />
        </motion.div>
      </motion.section>

      {/*  <motion.section
        id="testimonials"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Testimonials"
          title="Real Feedback Real Transparency"
        >
          What people say about the experience.
        </SectionHeader>

        <motion.div
          variants={softScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialsTicker />
        </motion.div>
      </motion.section> */}
<motion.section
  id="pricing"
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-120px" }}
  className="bg-forest px-4 py-14 text-white sm:px-6 lg:px-8"
>
  <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
    <motion.div variants={cardReveal}>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.28em] text-mint">
        Pricing & Requirements
      </p>

      <h2 className="text-3xl font-black leading-tight sm:text-5xl">
        Simple requirements and pricing model
      </h2>

      <p className="mt-5 text-base leading-7 text-mint/85 sm:text-lg sm:leading-8">
        No upfront charges. You only share 10% of the final profits generated in
        your trading account — keeping the model simple, fair, and
        performance-driven.
      </p>
    </motion.div>

    <motion.div
      variants={softScale}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-[2rem] bg-white p-5 text-charcoal shadow-premium sm:p-7"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep sm:text-sm sm:tracking-[0.2em]">
            Subscribing SwingNifty Strategy
          </p>

          <h3 className="mt-1 text-2xl font-black sm:text-3xl">
            Requirements
          </h3>
        </div>

        <IndianRupee
          className="mt-2 shrink-0 text-emeraldDeep"
          size={34}
        />
      </div>

      <div className="mb-3 flex items-start gap-3 rounded-2xl bg-mintSoft p-4">
        <CheckCircle2
          className="mt-0.5 shrink-0 text-emeraldDeep"
          size={18}
        />

        <span className="text-sm font-bold leading-6 sm:text-base">
          Capital Requirement: ₹5L for trading 1 lot of Nifty Futures
          <span className="block text-xs font-semibold text-charcoal/60 sm:text-sm">
            Currently 65 units
          </span>
        </span>
      </div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-3"
      >
        {[
          "Demat Account",
          "Tradetron Account",
          "Strategy Deployment from Tradetron",
        ].map((item) => (
          <motion.div
            key={item}
            variants={cardReveal}
            className="flex items-start gap-3 rounded-2xl bg-mintSoft p-4"
          >
            <CheckCircle2
              className="mt-0.5 shrink-0 text-emeraldDeep"
              size={18}
            />
            <span className="text-sm font-bold leading-6 sm:text-base">
              {item}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <motion.a
          {...buttonMotion}
          href="https://youtu.be/C5LIJXSBdIs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CC0000] px-5 py-3 text-center text-sm font-extrabold text-white shadow-lg transition hover:bg-[#B00000] sm:text-base"
        >
          User Guide ▶
        </motion.a>

        <motion.a
          {...buttonMotion}
          href={TRADETRON_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full border border-forest/15 px-5 py-3 text-center text-sm font-extrabold text-forest transition hover:bg-mintSoft sm:text-base"
        >
          Subscribe Strategy
        </motion.a>

        <motion.a
          {...buttonMotion}
          href="#contact"
          className="inline-flex w-full items-center justify-center rounded-full border border-forest/15 px-5 py-3 text-center text-sm font-extrabold text-forest transition hover:bg-mintSoft sm:text-base"
        >
          Contact Us
        </motion.a>
      </div>
    </motion.div>
  </div>
</motion.section>

      <motion.section
  id="about"
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-120px" }}
  className="bg-white px-4 py-16 sm:px-6 lg:px-8"
>
  <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-emerald-900/10 bg-mintSoft p-6 shadow-premium md:p-10 lg:p-14">
    {/* Heading above photo */}
    <motion.div variants={cardReveal} className="mb-10 text-center">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.28em] text-emeraldDeep">
        About Us
      </p>

      <h2 className="text-3xl font-black tracking-[-0.03em] text-charcoal sm:text-5xl">
        Meet the Founder: Siddharth Bisen
      </h2>
    </motion.div>

    <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        variants={softScale}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-4 rounded-[2.5rem] bg-emerald-300/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest to-emeraldDeep p-4">
          <img
            src="/siddharthProfile.png"
            alt="Siddharth Bisen, Founder of ZeroPrediction"
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </motion.div>

      <motion.div variants={cardReveal}>
        <div className="space-y-5 text-lg leading-8 text-charcoal/70">
          <p>
            Siddharth Bisen is the founder of{" "}
            <strong className="text-charcoal">
              ZeroPrediction (OPC) Pvt. Ltd.
            </strong>{" "}
            An alumnus of BITS Pilani, Siddharth holds a Master’s in Mathematics
            and a Bachelor’s in Chemical Engineering.
          </p>

          <p>
            He has over 13 years of experience in the Oil & Gas industry,
            working with firms including Lummus Technology, UOP Honeywell, Fluor
            Corporation, Toyo Engineering, and AVEVA Solutions.
          </p>

          <p>
            Since 2020, he has advocated stock market trading as a reliable
            secondary income stream. By maintaining his corporate career while
            managing the automated SwingNifty system, Siddharth demonstrates how
            working professionals can approach wealth creation without constant
            market monitoring.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      <motion.section
        id="insights"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="bg-mintSoft px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Podcasts"
          title="Siddharth's Journey: Building a Disciplined Trading System"
        />

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2"
        >
          {podcastVideos.map((video) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              variants={cardReveal}
              whileHover={{ y: -8, scale: 1.012 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-premium"
            >
              <div className="relative aspect-video bg-mintSoft">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-forest">
                  {video.label}
                </div>
                <div className="absolute inset-0 grid place-items-center bg-forest/20">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-forest shadow-glow transition group-hover:scale-110">
                    <Play fill="currentColor" />
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black">{video.title}</h3>
                <p className="mt-3 flex items-center gap-2 font-bold text-emeraldDeep">
                  Watch on YouTube <ExternalLink size={17} />
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Contact"
          title="Start with a clear conversation"
        />

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
        >
          {[
            {
              href: `mailto:${EMAIL}`,
              icon: Mail,
              title: "Email Support",
              text: EMAIL,
              external: false,
            },
            {
              href: WHATSAPP_LINK,
              icon: PhoneCall,
              title: "WhatsApp Contact",
              text: `+91 ${WHATSAPP_NUMBER}`,
              external: true,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                variants={cardReveal}
                whileHover={{ y: -8, scale: 1.018 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-[2rem] bg-white p-8 shadow-premium"
              >
                <Icon className="mb-5 text-emeraldDeep" />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-charcoal/65">{item.text}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        variants={softScale}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-mintSoft px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full shadow-sm">
              <img
                src="/trivoxa-tech-logo.png"
                alt="www.trivoxatech.com"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="font-black text-charcoal">
                Developed by{" "}
                <a
                  href="https://www.trivoxatech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-500 hover:text-emerald-600"
                >
                  Trivoxa Tech
                </a>
              </p>
              <p className="text-sm font-semibold text-charcoal/55">
                Premium UI/UX and web development partner for ZeroPrediction.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-black text-forest">
            <BadgeCheck size={17} /> Built for trust-first fintech presentation
          </div>
        </div>
      </motion.section>

      <footer className="bg-charcoal px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm leading-7 text-white/65">
            <strong className="text-white">Risk Disclaimer:</strong> Trading in
            futures involves market risk. Past performance does not guarantee
            future returns. Please consult your financial advisor before
            subscribing.
          </p>
          <p className="mt-6 text-sm text-white/45 text-center">
            © {new Date().getFullYear()} ZeroPrediction (OPC) Pvt. Ltd.
            Hyderabad - 500014
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* <p className="text-sm leading-7 text-white/65">Hyderabad - 500014</p> */}
        </div>
      </footer>
    </main>
  );
}
