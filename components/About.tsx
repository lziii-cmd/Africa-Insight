"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const stats = [t.about.stat1, t.about.stat2, t.about.stat3];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#C8102E]" />
              <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
                {t.about.title}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-6">
              Africa Insight
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t.about.content}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#C8102E] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="relative hidden lg:block">
            <div className="bg-[#1B3A6B] rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C8102E] opacity-10 translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border border-white/10 -translate-x-1/2 translate-y-1/2" />

              <div className="relative space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#C8102E] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Pan-African Reach</h3>
                <p className="text-white/60 leading-relaxed">
                  From Dakar to Lagos, from Abidjan to Kinshasa — we bring local expertise and global standards to every study.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["CAPI", "CATI", "Focus Group", "Online"].map((m) => (
                    <span
                      key={m}
                      className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
