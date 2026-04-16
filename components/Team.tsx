"use client";

import { useLanguage } from "@/lib/i18n";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const avatarColors = [
  "#1B3A6B",
  "#C8102E",
  "#1e4a8a",
  "#8B1A2A",
  "#234d9e",
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C8102E]" />
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              {t.team.title}
            </span>
            <div className="w-10 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-4xl font-bold text-[#1B3A6B] mb-4">{t.team.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.team.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.team.members.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ background: avatarColors[i % avatarColors.length] }}
              >
                {initials(member.name)}
              </div>
              <h3 className="text-lg font-bold text-[#1B3A6B] mb-1">{member.name}</h3>
              <div className="text-[#C8102E] text-sm font-semibold mb-3">{member.role}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
