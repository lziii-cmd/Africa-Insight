"use client";

import { useLanguage } from "@/lib/i18n";

export default function Methodology() {
  const { t } = useLanguage();

  return (
    <section
      id="methodology"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d2347 0%, #1B3A6B 100%)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C8102E]" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-widest">
              {t.methodology.title}
            </span>
            <div className="w-10 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t.methodology.title}</h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">{t.methodology.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.methodology.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/10 rounded-2xl p-8 hover:bg-white/12 transition-colors"
            >
              <div className="text-3xl font-black text-[#C8102E] mb-4 leading-none">
                {item.acronym}
              </div>
              <h3 className="text-white font-semibold text-sm mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
