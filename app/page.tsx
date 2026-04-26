import { ArrowRight, CheckCircle2, ExternalLink, Mail, Play, ShieldCheck, Sparkles, UsersRound, PhoneCall, IndianRupee, BadgeCheck, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import TradingDashboard from "../components/TradingDashboard";
import BrowserBackScrollHandler from "../components/BrowserBackScrollHandler";
import PerformanceTable from "../components/PerformanceTable";
import TestimonialsTicker from "../components/TestimonialsTicker";

const TRADETRON_LINK = "https://tradetron.tech/strategy/9631310";
const EMAIL = "support@zeroprediction.in";
const WHATSAPP_NUMBER = "9650982322";
const WHATSAPP_LINK = "https://wa.me/919650982322";

const podcastVideos = [
  { title: "In Conversation with Rupeezy CEO Shauryam Gupta", url: "https://youtu.be/8h3IRXYgXu4?si=ubEQ4uZkJPWje4dt", id: "8h3IRXYgXu4", label: "Podcast" },
  { title: "Deconding Market Systems: A Dialogue with Aseem Juneja (Founder, A digital Blogger)", url: "https://youtu.be/R5_iKdkcdPU?si=9PyvZJ3KTyhRHyjd", id: "R5_iKdkcdPU", label: "Podcast" }
];

const pillars = [
  { title: "Rule-Based Entry", text: "Signals are designed around predefined conditions to avoid emotion-led decisions." },
  { title: "Planned Exit", text: "Exit logic is defined before execution, so the process stays structured." },
  { title: "Market-Adaptive Execution", text: "The approach is reviewed with changing market behaviour instead of fixed assumptions." },
  { title: "Defined Risk", text: "Placing risk at the core of every decision-making flow, we ensure capital protection remains the top priority." }
];

const requirements = ["Demat Account", "Tradetron Account", "Strategy Subscription", "Capital Requirement: ₹5L for 1 lot"];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <BrowserBackScrollHandler />

      <section id="hero" className="relative min-h-screen bg-radialMint px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 chart-grid opacity-55" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.03fr_.97fr]">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-bold text-forest shadow-sm backdrop-blur">
              <Sparkles size={16} /> Exclusively trading nifty futures via Tradetron
            </div>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Disciplined Trading Built for Passive Income Seekers
            </h1>
            <div className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70 sm:text-xl">
              A structured trading system with clear entries, planned exits, risk management, and market-adaptive execution — designed for people looking for an extra income source without giving time to daily trading.
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={TRADETRON_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-extrabold text-white shadow-glow transition hover:scale-105">Subscribe Stragey <ArrowRight size={18}/></a>
              <a href="#performance" className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white px-7 py-4 font-extrabold text-forest shadow-sm transition hover:scale-105">View Performance</a>
            </div>
          </div>
          <TradingDashboard />
        </div>
      </section>

      <section id="purpose" className="px-4 py-16 sm:px-6 lg:px-8 animate-fade-up">
        <SectionHeader eyebrow="Our Purpose" title="An additional income stream that requires no extra time">
          We help people generate an extra source of income without giving time to daily market tracking, while keeping the experience disciplined and transparent.
        </SectionHeader>
        
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-emerald-900/10 bg-mintSoft p-8 shadow-premium">
            <UsersRound className="mb-5 text-emeraldDeep" />
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep"></p>
            <h3 className="text-2xl font-black">Passive Income Seekers</h3>
            <p className="mt-3 leading-7 text-charcoal/65">Providing a structured high-clarity trading service that allows one to generate passive income.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-900/10 bg-mintSoft p-8 shadow-premium">
            <Briefcase className="mb-5 text-emeraldDeep" />
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep"></p>
            <h3 className="text-2xl font-black">Working Professionals</h3>
            <p className="mt-3 leading-7 text-charcoal/65">Tailored for career-driven individuals seeking a transparent, automated approach to a disciplined trading system.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-900/10 bg-white p-8 shadow-premium">
            <ShieldCheck className="mb-5 text-emeraldDeep" />
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-emeraldDeep"></p>
            <h3 className="text-2xl font-black">Disciplined Subscribers</h3>
            <p className="mt-3 leading-7 text-charcoal/65">Built for users who value process, risk awareness, and clean execution over noisy market tips.</p>
          </div>
        </div>
      </section>

      <section id="offering" className="bg-mintSoft px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Offering" title="SwingNifty: A specialized system focused exclusively on Nifty Futures swing trading" />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-premium transition hover:-translate-y-1">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-mint text-forest"><ShieldCheck/></div>
              <h3 className="text-xl font-black">{p.title === "Market-Adaptive Execution" ? <>Market-Adaptive Execution</> : p.title}</h3>
              <p className="mt-3 leading-7 text-charcoal/65">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="performance" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Strategy Performance" title="Monthly PNL and ROI">
          Transparent monthly results, simplified for an honest and confident evaluation of our trading system.
        </SectionHeader>
        <PerformanceTable />
      </section>

      <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Real Feedback Real Transparency">
          What peopele say about the experience.
        </SectionHeader>
        <TestimonialsTicker />
      </section>

      <section id="pricing" className="bg-forest px-4 py-14 text-white sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
    <div>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.28em] text-mint">
        Pricing & Requirements
      </p>

      <h2 className="text-3xl font-black leading-tight sm:text-5xl">
        Simple requirements before subscribing
      </h2>

      <p className="mt-5 text-lg leading-8 text-mint/85">
        No upfront charges. You only share 10% of the final profits generated in
        your trading account — keeping the model simple, fair, and
        performance-driven.
      </p>
    </div>

    <div className="rounded-[2rem] bg-white p-7 text-charcoal shadow-premium">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emeraldDeep">
            Subscribing SwingNifty Strategy
          </p>
          <h3 className="mt-1 text-3xl font-black">
            Requirements
          </h3>
        </div>

        <IndianRupee className="mt-2 shrink-0 text-emeraldDeep" size={36} />
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-mintSoft p-4">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emeraldDeep" size={18} />
          <span className="font-bold">
            Capital Requirement: ₹5L for 1 lot trading of Nifty Futures
            <span className="block text-sm font-semibold text-charcoal/60">
              Currently 65 units
            </span>
          </span>
        </div>

      <div className="grid gap-3">
        <div className="flex items-start gap-3 rounded-2xl bg-mintSoft p-4">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emeraldDeep" size={18} />
          <span className="font-bold">Demat Account</span>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-mintSoft p-4">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emeraldDeep" size={18} />
          <span className="font-bold">Tradetron Account</span>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-mintSoft p-4">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emeraldDeep" size={18} />
          <span className="font-bold">Strategy deployment plan from Tradetron</span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <a
          href={TRADETRON_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 font-extrabold text-white transition hover:scale-[1.02]"
        >
          Subscribe Strategy<ArrowRight size={18} />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-forest/15 px-6 py-4 font-extrabold text-forest transition hover:bg-mintSoft"
        >
          Queries? Contact us
        </a>
      </div>
    </div>
  </div>
</section>

      <section id="insights" className="bg-mintSoft px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Podcasts" title="Siddharth's Journey: Building a Disciplined Trading System" />
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
          {podcastVideos.map((video) => <a key={video.id} href={video.url} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-premium transition hover:-translate-y-1"><div className="relative aspect-video bg-mintSoft"><img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="h-full w-full object-cover"/><div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-forest">{video.label}</div><div className="absolute inset-0 grid place-items-center bg-forest/20"><span className="grid h-16 w-16 place-items-center rounded-full bg-white text-forest shadow-glow transition group-hover:scale-110"><Play fill="currentColor"/></span></div></div><div className="p-7"><h3 className="text-2xl font-black">{video.title}</h3><p className="mt-3 flex items-center gap-2 font-bold text-emeraldDeep">Watch on YouTube <ExternalLink size={17}/></p></div></a>)}
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Start with a clear conversation" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <a href={`mailto:${EMAIL}`} className="rounded-[2rem] bg-white p-8 shadow-premium transition hover:-translate-y-1"><Mail className="mb-5 text-emeraldDeep"/><h3 className="text-2xl font-black">Email Support</h3><p className="mt-2 text-charcoal/65">{EMAIL}</p><p className="mt-4 text-sm font-semibold text-charcoal/55"></p></a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-[2rem] bg-white p-8 shadow-premium transition hover:-translate-y-1"><PhoneCall className="mb-5 text-emeraldDeep"/><h3 className="text-2xl font-black">WhatsApp Contact</h3><p className="mt-2 text-charcoal/65">+91 {WHATSAPP_NUMBER}</p><p className="mt-4 text-sm font-semibold text-charcoal/55"></p></a>
        </div>
      </section>

      <section className="bg-mintSoft px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-charcoal  shadow-sm">
              <img src="/trivoxa-tech-logo.png" alt="Trivoxa Tech" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="font-black text-charcoal">Crafted by TRIVOXA TECH</p>
              <p className="text-sm font-semibold text-charcoal/55">Premium UI/UX and web development partner for ZeroPrediction.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-black text-forest"><BadgeCheck size={17}/> Built for trust-first fintech presentation</div>
        </div>
      </section>

      <footer className="bg-charcoal px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><p className="text-sm leading-7 text-white/65"><strong className="text-white">Risk Disclaimer:</strong> Trading in futures involves market risk. Past performance does not guarantee future returns. Please consult your financial advisor before subscribing.</p><p className="mt-6 text-sm text-white/45">© {new Date().getFullYear()} Zeroprediction · Clarity in Execution. Confidence in Results · SwingNifty</p></div>
      </footer>
    </main>
  );
}
