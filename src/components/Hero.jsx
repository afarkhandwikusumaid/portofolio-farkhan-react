import React from 'react'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 lg:py-0 lg:flex lg:items-center lg:justify-center overflow-hidden bg-[#0a0a0f] space-grid"
    >
      {/* Glow Orbs */}
      <div className="purple-glow-orb top-[-10%] left-[-10%]" />
      <div className="green-glow-orb bottom-[-10%] right-[-10%]" />

      {/* Orbiting Circles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-zinc-800/10 rounded-full animate-orbit-3">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 bg-accent-orange rounded-full blur-[1px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[750px] md:h-[750px] border border-zinc-800/20 rounded-full animate-orbit-2">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-accent-green rounded-full blur-[1px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] border border-zinc-800/30 rounded-full animate-orbit-1">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-purple rounded-full blur-[1px]" />
        </div>
      </div>

      {/* Hero Layout */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* ── Left Column ──────────────────────────────────────────────── */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start text-left">
          
          {/* Subheading Hello */}
          <span className="text-zinc-500 font-body text-xs md:text-sm tracking-[0.2em] font-semibold uppercase mb-4 block">
            {h.hello}
          </span>

          {/* Name */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            A. Farkhan Dwi Kusuma
          </h1>

          {/* Styled Subtitle Underlined */}
          <h2 className="text-zinc-300 font-heading text-base sm:text-lg md:text-xl font-bold mb-6">
            <span className="border-b-2 border-white text-white pb-1 inline-block">
              {h.roleTag}
            </span>
          </h2>

          {/* Social Media Icons */}
          <div className="flex gap-6 mb-8 text-zinc-400">
            {/* GitHub */}
            <a href="https://github.com/afarkhandwikusumaid" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/afarkhandwikusuma/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" rx="1" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/a.farkhannn/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Description */}
          <p className="text-zinc-400 font-body text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            {h.shortDesc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 md:px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-body text-xs md:text-sm font-bold tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300"
            >
              {h.viewProjects} <span className="inline-block transform scale-110">↗</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Vy1b1FgAihLdkTWqzTithh_b--mh4Ycz/view"
              target="_blank"
              rel="noreferrer"
              className="px-6 md:px-8 py-3.5 rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-white font-body text-xs md:text-sm font-medium tracking-wider text-center transition-all duration-300"
            >
              {h.downloadCv}
            </a>
          </div>
        </div>

        {/* ── Right Column — Premium Floating Card ────────────────────── */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center overflow-visible py-8 lg:py-0">
          <div className="relative max-w-[350px] w-full bg-zinc-950/60 rounded-3xl border border-zinc-900 p-4 backdrop-blur-xl shadow-2xl overflow-hidden animate-floatY">
            
            {/* Inner Portrait Card */}
            <div className="h-[340px] md:h-[390px] rounded-2xl overflow-hidden relative group">
              <img 
                src="/image/farkhan.png" 
                alt="A. Farkhan Dwi Kusuma" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay with Name & Role */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl md:text-2xl font-extrabold text-white leading-tight mb-1">
                  A. Farkhan Dwi Kusuma
                </h3>
                <p className="font-body text-[10px] text-zinc-400 tracking-widest uppercase">
                  {h.cardRole}
                </p>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="flex justify-between items-center px-1 pt-4 pb-1 border-t border-zinc-900 mt-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/image/farkhan.png" 
                  alt="Avatar" 
                  className="w-9 h-9 rounded-full border border-zinc-900 object-cover shrink-0" 
                />
                <div className="flex flex-col text-left">
                  <span className="font-body text-[11px] font-bold text-white leading-none mb-1">@a.farkhannn</span>
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] text-zinc-400 font-body">Online</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="text-xs font-body font-bold text-zinc-300 hover:text-white transition-colors duration-300 underline underline-offset-4"
              >
                {h.contactMe}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
