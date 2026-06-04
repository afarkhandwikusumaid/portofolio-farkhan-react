import React from 'react'
import { useLang } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="purple-glow-orb bottom-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section title */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-xs font-bold tracking-widest text-blue-500 uppercase">{s.label}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {s.heading}
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Education timeline */}
          <div className="flex flex-col">
            <h3 className="font-heading text-sm uppercase tracking-widest text-zinc-500 mb-8 font-bold">
              {s.timelineLabel}
            </h3>
            <div className="relative flex flex-col gap-10">

              {s.education.map((edu, idx) => (
                <div key={idx} className="timeline-item relative pl-12 text-left group">

                  {/* Vertical connector line segment — connects this dot to next dot */}
                  {idx < s.education.length - 1 && (
                    <div className="absolute left-3 top-6 bottom-[-40px] w-px bg-zinc-800/80" />
                  )}

                  {/* Dot */}
                  <span className="timeline-dot absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-blue-500" />
                  </span>

                  {/* Content */}
                  <span className="font-body text-xs font-bold text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded inline-block mb-3">
                    {edu.years}
                  </span>
                  <h4 className="font-heading text-base md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                    {edu.institution}
                  </h4>
                  <p className="text-zinc-400 font-body text-sm mt-1">{edu.program}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill pills */}
          <div className="flex flex-col">
            <h3 className="font-heading text-sm uppercase tracking-widest text-zinc-500 mb-8 font-bold">
              {s.expertiseLabel}
            </h3>
            <p className="text-zinc-400 font-body text-sm leading-relaxed mb-10">{s.expertiseText}</p>

            <div className="flex flex-wrap gap-3">
              {s.skillBars.map((skill) => (
                <div
                  key={skill.name}
                  className="px-5 py-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs font-body font-bold uppercase tracking-wider text-blue-400 hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
