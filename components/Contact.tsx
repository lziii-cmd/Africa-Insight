"use client";

import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
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
              {t.contact.title}
            </span>
            <div className="w-10 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
                label: "Adresse",
                value: t.contact.address,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                label: "Téléphone",
                value: `${t.contact.phone1}  ·  ${t.contact.phone2}`,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                label: "Email",
                value: t.contact.email,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                ),
                label: "Website",
                value: t.contact.website,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C8102E]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">{item.label}</div>
                  <div className="text-white text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
              />
            </div>
            <input
              type="text"
              placeholder={t.contact.form.subject}
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
            />
            <textarea
              rows={5}
              placeholder={t.contact.form.message}
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#C8102E] transition-colors resize-none text-sm"
            />
            <button
              type="submit"
              className="w-full bg-[#C8102E] hover:bg-[#a50d26] text-white font-semibold py-4 rounded-xl transition-colors"
            >
              {t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
