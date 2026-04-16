"use client";

import { useLanguage } from "@/lib/i18n";

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C8102E]" />
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              {t.sectors.title}
            </span>
            <div className="w-10 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-4xl font-bold text-[#1B3A6B] mb-4">{t.sectors.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.sectors.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {t.sectors.items.map((sector, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-slate-200 bg-slate-50 hover:bg-[#1B3A6B] hover:border-[#1B3A6B] rounded-full px-6 py-3 transition-all duration-200 cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-[#C8102E] group-hover:bg-red-300 flex-shrink-0" />
              <span className="text-slate-700 group-hover:text-white font-medium text-sm">
                {sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
