import React from 'react'
import { useLang } from '../context/LanguageContext'

const projectImages = ['/image/purielena.jpg', '/image/peradikharisma.png', '/image/pointcut.jpg']
const projectLinks  = ['https://purielena.com', 'https://peradikharisma.org', 'https://pointcut-hairtsudio.com']

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="purple-glow-orb top-[10%] right-[-10%]" />
      <div className="green-glow-orb bottom-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-purple" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-accent-purple uppercase">{p.label}</span>
            <span className="w-8 h-[1px] bg-accent-purple" />
          </div>
          <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {p.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {p.items.map((project, idx) => (
            <div key={idx} className="service-card p-6 rounded-2xl flex flex-col h-full group">

              {/* Project image */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-zinc-800/80 bg-zinc-950 relative">
                <img
                  src={projectImages[idx]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-3 text-left">
                {project.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900/60 border border-zinc-800 text-[10px] font-body tracking-wider text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-zinc-400 font-body text-xs md:text-sm leading-relaxed mb-6 text-left flex-grow">
                {project.desc}
              </p>

              {/* Visit link */}
              <a
                href={projectLinks[idx]}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-accent-purple/10 hover:border-accent-purple text-center text-white font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>{p.visitSite}</span>
                <span className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">
                  <ArrowIcon />
                </span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
