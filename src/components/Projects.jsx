import React, { useState, useEffect, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'
import useEmblaCarousel from 'embla-carousel-react'

// ── Static data ───────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    image: '/image/purielena.png',
    link:  'https://purielena.com',
  },
  {
    image: '/image/peradikharisma.png',
    link:  'https://peradikharisma.org',
  },
  {
    image: '/image/pointcut.png',
    link:  'https://pointcut-hairstudio.com',
  },
  {
    image: '/image/koslievi.png',
    link:  'https://kos-lievi.vercel.app',
  },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

// ── Component ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  // Setup Embla with loop: false
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Get active image to display on the left side
  const activeImage = PROJECTS[selectedIndex]?.image || PROJECTS[0].image

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="purple-glow-orb top-[10%] right-[-10%]" />
      <div className="green-glow-orb bottom-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">
              {p.label}
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {p.heading}
          </h2>
        </div>
      </div>

      {/* Pertamina Style Carousel Container (Full Width) */}
      <div className="relative w-full overflow-visible flex flex-col md:flex-row items-stretch min-h-[500px] md:min-h-[600px] z-10">
          
          {/* Left Side: Large Active Image */}
          <div className="w-full md:w-[75%] md:absolute left-0 top-0 aspect-video md:aspect-auto md:h-full z-0 overflow-hidden bg-black/40 md:bg-transparent">
            <img
              // Adding a key forces re-render/animation on image change
              key={activeImage}
              src={activeImage}
              alt="Active Project"
              className="w-full h-full object-contain md:object-cover animate-[fadeIn_0.5s_ease-in-out]"
            />
            {/* Gradients to blend image with background and right panel */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/40 md:via-transparent to-[#0a0a0f] pointer-events-none opacity-80 md:opacity-60" />
          </div>

          {/* Right Side: Cards Carousel */}
          <div className="w-full md:w-[50%] z-10 relative mt-[-60px] md:mt-0 md:ml-auto flex flex-col justify-center pb-12 md:pb-0 md:pl-8">
             
             {/* Embla Viewport */}
             <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing px-6 md:px-0" ref={emblaRef}>
               <div className="flex py-10 gap-6">
                 
                 {p.items.map((project, idx) => {
                   const isActive = selectedIndex === idx;
                   
                   return (
                     <div 
                       key={idx} 
                       className="flex-[0_0_90%] md:flex-[0_0_80%] min-w-0 transition-transform duration-500 ease-out"
                       style={{
                         transform: isActive ? 'scale(1)' : 'scale(0.95)',
                         opacity: isActive ? 1 : 0.8
                       }}
                     >
                       <div 
                         className={`relative overflow-hidden group p-8 md:p-10 rounded-2xl shadow-2xl h-full flex flex-col transition-colors duration-500 border ${
                           isActive 
                            ? 'bg-[#002f9c] border-[#0041d4]'  // Pertamina Blue
                            : 'bg-white border-zinc-200 hover:shadow-blue-500/10'       // White/Light
                         }`}
                       >
                         {/* Hover Top Line */}
                         <div className={`absolute top-0 left-0 w-full h-1.5 transform origin-left transition-transform duration-300 ${
                           isActive ? 'bg-white/50 scale-x-100' : 'bg-blue-600 scale-x-0 group-hover:scale-x-100'
                         }`} />
                         
                         <h3 className={`font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-3 ${
                           isActive ? 'text-white' : 'text-zinc-900'
                         }`}>
                           {project.title}
                         </h3>

                         {/* Tags */}
                         <div className="flex flex-wrap gap-2 mb-6">
                           {project.tags?.map((tag) => (
                             <span
                               key={tag}
                               className={`px-2.5 py-1 rounded-md text-[10px] md:text-xs font-body tracking-wider ${
                                 isActive 
                                   ? 'bg-white/10 border border-white/20 text-blue-100' 
                                   : 'bg-blue-50 border border-blue-100 text-blue-600'
                               }`}
                             >
                               {tag}
                             </span>
                           ))}
                         </div>
                         
                         {/* Accent Line */}
                         <div 
                           className="w-10 h-1 mb-6 rounded-full" 
                           style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(239,68,68,0.8)' }} 
                         />
                         
                         <p className={`font-body text-sm md:text-base leading-relaxed mb-10 flex-grow ${
                           isActive ? 'text-blue-100' : 'text-zinc-600'
                         }`}>
                           {project.desc}
                         </p>

                         {/* Arrow Button Inside Card */}
                         <a 
                           href={PROJECTS[idx].link} 
                           target="_blank" 
                           rel="noreferrer" 
                           aria-label={p.visitSite}
                           className={`self-end px-5 py-2.5 rounded-full flex gap-2 items-center justify-center ${
                             isActive 
                               ? 'bg-blue-500 text-white hover:bg-white hover:text-[#002f9c]' 
                               : 'bg-zinc-900 text-white hover:bg-blue-600 hover:text-white'
                           }`}
                         >
                           <span className="text-sm font-medium">{p.visitSite}</span>
                           <ArrowUpRightIcon />
                         </a>

                       </div>
                     </div>
                   )
                 })}
                 
               </div>
             </div>

             {/* Navigation Prev / Next Buttons */}
              <div className="flex justify-end gap-4 px-6 md:pr-12 md:pl-0 mt-4 md:mt-6 w-full">
               <button 
                 onClick={scrollPrev} 
                 disabled={prevBtnDisabled}
                 aria-label="Previous Project"
                 className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 ${
                   prevBtnDisabled 
                     ? 'border-zinc-700/50 bg-[#1e1e28]/40 text-zinc-600 cursor-not-allowed scale-[0.92]' 
                     : 'border-blue-500/50 bg-blue-500/12 text-blue-400 hover:bg-blue-500/20 cursor-pointer scale-100'
                 }`}
               >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <polyline points="15 18 9 12 15 6" />
                 </svg>
               </button>
               <button 
                 onClick={scrollNext} 
                 disabled={nextBtnDisabled}
                 aria-label="Next Project"
                 className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 ${
                   nextBtnDisabled 
                     ? 'border-zinc-700/50 bg-[#1e1e28]/40 text-zinc-600 cursor-not-allowed scale-[0.92]' 
                     : 'border-blue-500/50 bg-blue-500/12 text-blue-400 hover:bg-blue-500/20 cursor-pointer scale-100'
                 }`}
               >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <polyline points="9 18 15 12 9 6" />
                 </svg>
               </button>
             </div>

          </div>
      </div>
    </section>
  )
}
