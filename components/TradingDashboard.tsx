import { ArrowUpRight, ShieldCheck, Target } from "lucide-react";

export default function TradingDashboard() {
  return (
    <div className="animate-float rounded-[2rem] border border-emerald-900/10 bg-white/85 p-5 shadow-premium backdrop-blur-xl">
      <div className="rounded-[1.5rem] bg-charcoal p-5 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-white/50">Well-define Trading System</p>
            <h3 className="mt-1 text-2xl font-black">SwingNifty</h3>
          </div>
          <div className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-forest">Disciplined</div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Entry", "Rule-based"],
            ["Exit", "Planned"],
            ["Risk", "Defined"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">{label}</p>
              <p className="mt-2 text-lg font-black">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-emerald-400/25 to-white/5 p-4">
          <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <svg viewBox="0 0 420 140" className="h-full w-full" aria-label="Performance trend illustration">
              <path d="M0 100 C55 80 70 94 120 68 S210 84 260 50 S330 40 420 24" fill="none" stroke="#7ee7b8" strokeWidth="5" strokeLinecap="round" />
              <path d="M0 118 C55 96 70 108 120 82 S210 96 260 64 S330 54 420 38 L420 140 L0 140Z" fill="rgba(126,231,184,.16)" />
            </svg>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 text-charcoal">
            <Target className="mb-2 text-emeraldDeep" />
            <p className="text-xs font-bold text-charcoal/50">Focus</p>
            <p className="font-black">Nifty Futures</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-charcoal">
            <ArrowUpRight className="mb-2 text-emeraldDeep" />
            <p className="text-xs font-bold text-charcoal/50">Mode</p>
            <p className="font-black">Swing Trading</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-charcoal">
            <ShieldCheck className="mb-2 text-emeraldDeep" />
            <p className="text-xs font-bold text-charcoal/50">Platform</p>
            <p className="font-black">Tradetron</p>
          </div>
        </div>
      </div>
    </div>
  );
}
