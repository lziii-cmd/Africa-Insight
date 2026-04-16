"use client";

import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C8102E]" />
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              {t.projects.title}
            </span>
            <div className="w-10 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-4xl font-bold text-[#1B3A6B] mb-4">{t.projects.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow bg-slate-50"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-[#C8102E]" />
              <div className="p-8">
                <div className="text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-2">
                  {project.client}
                </div>
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-[#1B3A6B]/10 text-[#1B3A6B] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
