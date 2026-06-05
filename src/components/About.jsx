import React from 'react'
import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="purple-glow-orb top-[40%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[360px] aspect-square rounded-2xl border border-zinc-800/80 p-2 bg-zinc-900/30 backdrop-blur-sm">

            {/* Gradient overlay */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-accent-purple/30 via-transparent to-accent-green/20 z-10 pointer-events-none" />

            <img
              src="/image/farkhan.png"
              alt="A. Farkhan Dwi Kusuma"
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />

            {/* Location badge */}
            <div className="absolute -bottom-4 right-2 md:-right-4 bg-zinc-900/95 border border-zinc-800 px-4 py-3 rounded-xl flex items-center gap-2.5 shadow-2xl animate-floatY">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              <span className="font-body text-[10px] md:text-xs uppercase tracking-wider text-zinc-300">
                Semarang, Jawa Tengah
              </span>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">{a.label}</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
            {a.heading}
          </h2>

          <p className="text-zinc-400 font-body text-sm md:text-base leading-relaxed mb-6">
            {a.bio1}
          </p>
          <p className="text-zinc-400 font-body text-sm md:text-base leading-relaxed mb-10">
            {a.bio2}
          </p>

          {/* Stats Display */}
          <div className="w-full mt-2">
            <div className="grid grid-cols-3 gap-4">
              {(a.stats || []).map((stat, idx) => {
                const [val, ...rest] = stat.split(' ')
                const labelText = rest.join(' ')
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center group"
                  >
                    <span className="font-heading text-2xl md:text-3xl font-extrabold text-blue-500 mb-1 group-hover:scale-105 transition-transform duration-300">
                      {val}
                    </span>
                    <span className="font-body text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 font-bold">
                      {labelText}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
