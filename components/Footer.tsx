"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C8102E] flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div>
              <div className="font-bold tracking-widest text-base">AFRICA INSIGHT</div>
              <div className="text-white/35 text-xs mt-0.5">{t.footer.tagline}</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-white/50">
            {[
              ["#about", t.nav.about],
              ["#services", t.nav.services],
              ["#projects", t.nav.projects],
              ["#team", t.nav.team],
              ["#contact", t.nav.contact],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-white/35 text-sm">
            © {new Date().getFullYear()} Africa Insight. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
