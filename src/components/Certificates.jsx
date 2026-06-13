import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'

// ── Constants ─────────────────────────────────────────────────────────────────

const CERT_IMAGES = [
  '/image/sertifikat/sertifbtngweb.jpeg',
  '/image/sertifikat/sertifaidicoding.jpg',
  '/image/sertifikat/sertifwebistedicoding.jpg',
  '/image/sertifikat/sertifjsdicoding.jpg',
  '/image/sertifikat/sertiffrontenddicoding.jpg',
  '/image/sertifikat/sertifreactdicoding.jpg',
  '/image/sertifikat/sertifintrofinancialliteracydicoding.jpg',
  '/image/sertifikat/sertifstrategipengembangandiridicoding.jpg',
  '/image/sertifikat/sertidatasciencemsfabricdicoding.jpg',
]

const DRAG_THRESHOLD = 40  
const DESKTOP_BREAKPOINT = 768 
const DESKTOP_CARDS = 3
const MOBILE_CARDS = 1
const CARD_GAP = 24 

// ── Sub-components ────────────────────────────────────────────────────────────

function ArrowBtn({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200"
      style={{
        background: disabled ? 'rgba(30,30,40,0.4)' : 'rgba(59,130,246,0.12)',
        borderColor: disabled ? 'rgba(63,63,70,0.5)' : 'rgba(59,130,246,0.5)',
        color: disabled ? '#52525b' : '#60a5fa',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transform: disabled ? 'scale(0.92)' : 'scale(1)',
      }}
    >
      <svg
        width="16" height="16"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      >
        {dir === 'prev'
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />
        }
      </svg>
    </button>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Certificates() {
  const { t } = useLang()
  const c = t.certificates

  const [selectedImage, setSelectedImage] = useState(null)
  const [current, setCurrent] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(MOBILE_CARDS)

  const viewportRef = useRef(null)
  const dragStartX = useRef(null)
  const isDragging = useRef(false)

  // Derived value — total slidable positions
  const maxIndex = Math.max(0, c.items.length - cardsPerView)

  // ── Navigation ─────────────────────────────────────────────────────────────

  const goTo = useCallback((idx) => {
    setCurrent(Math.min(Math.max(0, idx), maxIndex))
  }, [maxIndex])

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  // ── Drag / Swipe gesture ───────────────────────────────────────────────────

  const onDragStart = useCallback((clientX) => {
    dragStartX.current = clientX
    isDragging.current = true
  }, [])

  const onDragEnd = useCallback((clientX) => {
    if (!isDragging.current || dragStartX.current === null) return
    const delta = dragStartX.current - clientX
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      delta > 0 ? next() : prev()
    }
    dragStartX.current = null
    isDragging.current = false
  }, [next, prev])

  // Mouse handlers
  const onMouseDown = useCallback((e) => {
    // Skip if user clicked a button or the image zoom trigger
    if (e.target.closest('[data-no-drag]')) return
    onDragStart(e.clientX)
  }, [onDragStart])

  const onMouseUp = useCallback((e) => {
    onDragEnd(e.clientX)
  }, [onDragEnd])

  const onMouseLeave = useCallback((e) => {
    if (isDragging.current) onDragEnd(e.clientX)
  }, [onDragEnd])

  // Touch handlers
  const onTouchStart = useCallback((e) => {
    onDragStart(e.touches[0].clientX)
  }, [onDragStart])

  const onTouchEnd = useCallback((e) => {
    if (e.changedTouches.length > 0) onDragEnd(e.changedTouches[0].clientX)
  }, [onDragEnd])

  // Attach mousemove with { passive: false } to allow preventDefault (text selection guard)
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onMouseMove = (e) => {
      if (isDragging.current) e.preventDefault()
    }
    el.addEventListener('mousemove', onMouseMove, { passive: false })
    return () => el.removeEventListener('mousemove', onMouseMove)
  }, [])

  // ── Responsive breakpoint ──────────────────────────────────────────────────

  useEffect(() => {
    const update = () => {
      setCardsPerView(window.innerWidth >= DESKTOP_BREAKPOINT ? DESKTOP_CARDS : MOBILE_CARDS)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Clamp current index when cardsPerView changes (e.g., resize)
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  // ── Body scroll lock when lightbox is open ─────────────────────────────────

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  // ── Track transform ────────────────────────────────────────────────────────

  // Each card occupies 1/cardsPerView of the track width.
  // The gap between cards also needs to be accounted for in the offset.
  const trackOffset = current > 0
    ? `calc(-${(current / cardsPerView) * 100}% - ${(current * CARD_GAP) / cardsPerView}px)`
    : '0px'

  const cardWidth = `calc((100% - ${(cardsPerView - 1) * CARD_GAP}px) / ${cardsPerView})`

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <section id="certificates" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="green-glow-orb top-[30%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">
              {c.label}
            </span>
            <span className="w-8 h-[1px] bg-blue-500" />
          </div>
          <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {c.heading}
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Viewport */}
          <div
            ref={viewportRef}
            className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Track */}
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${trackOffset})` }}
            >
              {c.items.map((cert, idx) => (
                <div
                  key={idx}
                  className="service-card p-6 rounded-2xl flex flex-col text-left group flex-shrink-0"
                  style={{ width: cardWidth }}
                >
                  {/* Image — height follows natural image ratio */}
                  <div
                    data-no-drag
                    className="w-full rounded-xl overflow-hidden mb-6 border border-zinc-800/80 bg-zinc-950 relative cursor-pointer"
                    onClick={() => setSelectedImage(CERT_IMAGES[idx])}
                    role="button"
                    tabIndex={0}
                    aria-label={`View certificate: ${cert.title}`}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(CERT_IMAGES[idx])}
                  >
                    <img
                      src={CERT_IMAGES[idx]}
                      alt={cert.title}
                      className="w-full h-auto block object-contain transition-opacity duration-300 group-hover:opacity-90"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                      <span className="font-body text-[10px] text-white bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        ZOOM
                      </span>
                    </div>
                  </div>

                  {/* Provider & Year badge */}
                  <div className="flex justify-between items-center w-full mb-4">
                    <span className="font-body text-[10px] font-bold text-blue-500 uppercase tracking-wider">
                      {cert.provider}
                    </span>
                    <span className="font-body text-[10px] font-bold bg-zinc-900/60 border border-zinc-800 px-3 py-1 rounded-full text-zinc-400">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-white mb-3 min-h-[3rem] md:min-h-[3.5rem]">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-400 font-body text-xs leading-relaxed flex-grow">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Controls — always visible on both mobile and desktop */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <ArrowBtn dir="prev" onClick={prev} disabled={current === 0} />

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: idx === current ? '24px' : '8px',
                    height: '8px',
                    background: idx === current ? '#3b82f6' : 'rgba(63,63,70,0.8)',
                  }}
                />
              ))}
            </div>

            <ArrowBtn dir="next" onClick={next} disabled={current === maxIndex} />
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[2000] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 md:-right-10 md:top-0 text-zinc-400 hover:text-white font-mono text-3xl leading-none cursor-pointer bg-zinc-900/60 w-9 h-9 rounded-full flex items-center justify-center border border-zinc-800 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-zinc-800/80"
            />
          </div>
        </div>
      )}
    </section>
  )
}
