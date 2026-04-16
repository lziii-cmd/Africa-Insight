"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const lines = t.hero.title.split("\n");

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d2347 0%, #1B3A6B 60%, #1e4a8a 100%)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-16 right-0 w-[500px] h-[500px] rounded-full border border-white/5 translate-x-1/3" />
      <div className="absolute top-32 right-0 w-[350px] h-[350px] rounded-full border border-[#C8102E]/20 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C8102E] opacity-5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#C8102E]/40 bg-[#C8102E]/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-red-300 text-sm font-medium">{t.hero.tagline}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {lines[0]}
            <br />
            <span className="text-[#C8102E]">{lines[1]}</span>
            <br />
            {lines[2]}
          </h1>

          {/* Red accent bar */}
          <div className="w-20 h-1.5 bg-[#C8102E] rounded-full mb-8" />

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-12 max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d26] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              {t.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 72L80 60C160 48 320 24 480 18C640 12 800 24 960 30C1120 36 1280 36 1360 36L1440 36V72H1360C1280 72 1120 72 960 72C800 72 640 72 480 72C320 72 160 72 80 72H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
