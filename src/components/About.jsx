import React, { useState, useEffect, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'
import useEmblaCarousel from 'embla-carousel-react'

// ── About component ───────────────────────────────────────────────────────────

export default function About() {
  const { t } = useLang()
  const a = t.about

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

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
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">
              {a.label}
            </span>
          </div>

          <div className="w-full relative">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {a.roles?.map((role, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pr-4">
                    <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
                      {role.heading}
                    </h2>
                    <p className="text-zinc-400 font-body text-sm md:text-base leading-relaxed mb-6">{role.bio1}</p>
                    <p className="text-zinc-400 font-body text-sm md:text-base leading-relaxed mb-8">{role.bio2}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mb-8 mt-2">
              {a.roles?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? 'bg-blue-500 w-8' : 'bg-zinc-700 w-2 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="w-full mt-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {a.stats.map((stat, idx) => {
                // Split only on first space to correctly handle multi-word values like "5+"
                const spaceIdx = stat.indexOf(' ')
                const val       = spaceIdx !== -1 ? stat.slice(0, spaceIdx) : stat
                const label     = spaceIdx !== -1 ? stat.slice(spaceIdx + 1) : ''
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center group"
                  >
                    <span className="font-heading text-2xl md:text-3xl font-extrabold text-blue-500 mb-1 group-hover:scale-105 transition-transform duration-300">
                      {val}
                    </span>
                    <span className="font-body text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 font-bold">
                      {label}
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
