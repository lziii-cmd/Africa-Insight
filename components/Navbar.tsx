"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#sectors", label: t.nav.sectors },
    { href: "#methodology", label: t.nav.methodology },
    { href: "#projects", label: t.nav.projects },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Africa Insight"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C8102E] ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language toggle + hamburger */}
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center text-sm font-bold border rounded-full px-1 py-0.5 transition-colors ${
                scrolled ? "border-slate-300" : "border-white/40"
              }`}
            >
              <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "fr"
                    ? "bg-[#C8102E] text-white"
                    : scrolled
                    ? "text-slate-400 hover:text-slate-800"
                    : "text-white/60 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en"
                    ? "bg-[#C8102E] text-white"
                    : scrolled
                    ? "text-slate-400 hover:text-slate-800"
                    : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg
                className={`w-6 h-6 ${scrolled ? "text-slate-700" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-3 shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-slate-700 hover:text-[#C8102E] hover:bg-slate-50 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
