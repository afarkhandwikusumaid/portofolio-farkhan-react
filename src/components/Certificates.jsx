import React, { useState } from 'react'
import { useLang } from '../context/LanguageContext'

const certImages = [
  '/image/sertifikat/sertifwebistedicoding.jpg',
  '/image/sertifikat/sertifbtngweb.jpeg',
  '/image/sertifikat/sertifaidicoding.jpg'
]

export default function Certificates() {
  const { t } = useLang()
  const c = t.certificates
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="certificates" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="green-glow-orb top-[30%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-green" />
            <span className="font-body text-xs font-bold tracking-widest text-accent-green uppercase">{c.label}</span>
            <span className="w-8 h-[1px] bg-accent-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {c.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.items.map((cert, idx) => (
            <div key={idx} className="service-card p-6 rounded-2xl flex flex-col text-left group h-full">

              {/* Certificate image (clickable) */}
              <div
                className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-zinc-800/80 bg-zinc-950 relative cursor-pointer"
                onClick={() => setSelectedImage(certImages[idx])}
                role="button"
                tabIndex={0}
                aria-label={`View certificate: ${cert.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(certImages[idx])}
              >
                <img
                  src={certImages[idx]}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                  decoding="async"
                />
                {/* Zoom hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <span className="font-body text-[10px] text-white bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                    ZOOM
                  </span>
                </div>
              </div>

              {/* Year badge (no icon) */}
              <div className="flex justify-end w-full mb-4">
                <span className="font-body text-[10px] font-bold bg-zinc-900/60 border border-zinc-800 px-3 py-1 rounded-full text-zinc-400">
                  {cert.year}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-1">{cert.title}</h3>
              <span className="font-body text-[10px] font-bold text-accent-green mb-3 block uppercase tracking-wider">{cert.provider}</span>
              <p className="text-zinc-400 font-body text-xs leading-relaxed flex-grow">{cert.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox modal */}
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
