import React from 'react'
import { useLang } from '../context/LanguageContext'

const serviceIcons = [
  // UI/UX
  <svg key="uiux" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M21 16V8a2 2 0 0 0-2-2h-5l-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
    <path d="m9 14 2-2 4 4" />
  </svg>,
  // Marketing
  <svg key="mkt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
  // Web Dev
  <svg key="web" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="green-glow-orb top-[20%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">{s.label}</span>
            <span className="w-8 h-[1px] bg-blue-500" />
          </div>
          <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {s.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.items.map((item, idx) => (
            <div key={idx} className="service-card p-8 md:p-10 rounded-2xl flex flex-col items-start text-left group">
              <div className="flex justify-between items-center w-full mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                  {serviceIcons[idx]}
                </div>
                <span className="font-body text-zinc-600 text-sm font-bold tracking-wider">
                  {String(idx + 1).padStart(3, '0')}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 font-body text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
