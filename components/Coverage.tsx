"use client";

import { useLanguage } from "@/lib/i18n";

export default function Coverage() {
  const { t } = useLanguage();

  return (
    <section id="coverage" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C8102E]" />
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              {t.coverage.title}
            </span>
            <div className="w-10 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-4xl font-bold text-[#1B3A6B] mb-4">{t.coverage.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.coverage.subtitle}</p>
        </div>

        {/* Africa map placeholder + country list */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {t.coverage.countries.map((country, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#C8102E]/30 transition-all"
            >
              <div className="w-3 h-3 rounded-full bg-[#C8102E] flex-shrink-0" />
              <span className="text-slate-700 font-medium text-sm">{country}</span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          {t.coverage.countries.length} countries &mdash; and growing
        </p>
      </div>
    </section>
  );
}
