import React from 'react'
import { useLang } from '../context/LanguageContext'

// ── Static data ───────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    image: '/image/purielena.jpg',
    link:  'https://purielena.com',
  },
  {
    image: '/image/peradikharisma.png',
    link:  'https://peradikharisma.org',
  },
  {
    image: '/image/pointcut.jpg',
    link:  'https://pointcut-hairstudio.com',
  },
  {
    image: '/image/koslievi.png',
    link:  'https://kos-lievi.vercel.app',
  },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14" height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

// ── Component ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="purple-glow-orb top-[10%] right-[-10%]" />
      <div className="green-glow-orb bottom-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">
              {p.label}
            </span>
            <span className="w-8 h-[1px] bg-blue-500" />
          </div>
          <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {p.heading}
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-16 md:gap-32">
          {p.items.map((project, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-0 group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Section */}
                <div className={`w-[92%] md:w-7/12 relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 aspect-[16/10] shadow-2xl z-0 ${isEven ? 'self-end md:self-auto' : 'self-start md:self-auto'}`}>
                  <img
                    src={PROJECTS[idx].image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className={`w-[92%] md:w-6/12 flex flex-col z-10 -mt-8 md:mt-0 ${isEven ? 'self-start md:self-auto items-start text-left md:-mr-24' : 'self-end md:self-auto items-start md:items-end text-left md:text-right md:-ml-24'}`}>
                  <div className="service-card p-6 md:p-10 rounded-2xl backdrop-blur-xl bg-zinc-900/80 border border-zinc-800 shadow-2xl w-full">
                    <h3 className="font-heading text-xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-3 md:mb-4">
                      {project.title}
                    </h3>
                    
                    <div className={`flex flex-wrap gap-2 mb-4 md:mb-6 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs font-body tracking-wider text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-zinc-300 font-body text-xs md:text-base leading-relaxed mb-6 md:mb-8">
                      {project.desc}
                    </p>

                    {/* CTA */}
                    <div className={`flex ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                      <a
                        href={PROJECTS[idx].link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 md:gap-3 py-2.5 md:py-3 px-6 md:px-8 rounded-lg border border-zinc-700 bg-zinc-800/50 hover:bg-blue-600 hover:border-blue-500 text-white font-body text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 group/btn"
                      >
                        <span>{p.visitSite}</span>
                        <span className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                          <ArrowIcon />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
