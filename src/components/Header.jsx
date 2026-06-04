import React, { useEffect, useState, useRef } from 'react'
import { useLang } from '../context/LanguageContext'

// Globe icon for language switcher
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
)

export default function Header() {
  const { lang, setLang, t } = useLang()

  const [navOpen, setNavOpen]       = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [langOpen, setLangOpen]     = useState(false)
  const langRef                     = useRef(null)

  // ── Scroll & resize listeners ────────────────────────────────────────────
  useEffect(() => {
    const onKey    = (e) => { if (e.key === 'Escape') { setNavOpen(false); setLangOpen(false) } }
    const onResize = () => { if (window.innerWidth > 768) setNavOpen(false) }
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  // ── Derived values ───────────────────────────────────────────────────────
  const navClass = [
    'fixed left-0 right-0 mx-auto',
    'w-[92%] max-w-5xl rounded-full border',
    'flex justify-between items-center',
    'px-5 md:px-8 h-16',
    'transition-all duration-300 z-[1000] backdrop-blur-md top-6',
    scrolled
      ? 'bg-[#0a0a0f]/85 border-zinc-800/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
      : 'bg-[#0a0a0f]/40 border-zinc-900/50',
  ].join(' ')

  const navLinks = [
    { key: 'home',         href: '#home' },
    { key: 'about',        href: '#about' },
    { key: 'services',     href: '#services' },
    { key: 'projects',     href: '#projects' },
    { key: 'certificates', href: '#certificates' },
    { key: 'skills',       href: '#skills' },
    { key: 'contact',      href: '#contact' },
  ]

  return (
    <header>
      {/* ── Mobile overlay ────────────────────────────────────────────── */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Main navbar pill ──────────────────────────────────────────── */}
      <div className={navClass}>

        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-lg font-extrabold tracking-widest text-white hover:text-blue-500 transition-colors duration-300 shrink-0 uppercase"
        >
          Farkhan
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="font-body text-[11px] font-bold tracking-widest text-zinc-400 hover:text-white uppercase transition-colors duration-200 relative group py-2"
                >
                  {t.nav[key]}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: language picker + burger ───────────────────────── */}
        <div className="flex items-center gap-3">

          {/* Language picker */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200 text-xs font-body font-bold uppercase tracking-widest"
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <GlobeIcon />
              <span>{lang === 'en' ? 'EN' : 'ID'}</span>
              {/* Chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown */}
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-[#0d0d18]/95 border border-zinc-800 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden z-50">
                {[
                  { code: 'en', label: 'English', flag: '🇬🇧' },
                  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
                ].map(({ code, label, flag }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false) }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-body font-bold uppercase tracking-widest transition-colors duration-150 text-left
                      ${lang === code
                        ? 'text-accent-green bg-accent-green/5'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                      }`}
                  >
                    <span className="text-base leading-none">{flag}</span>
                    {label}
                    {lang === code && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="ml-auto text-accent-green">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Burger (mobile only) */}
          <button
            className="flex flex-col gap-1.5 justify-center items-center w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 md:hidden z-[110] focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(v => !v)}
          >
            <span className={`w-5 h-[2px] bg-zinc-300 rounded transition-transform duration-300 ${navOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`w-5 h-[2px] bg-zinc-300 rounded transition-opacity duration-300 ${navOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[2px] bg-zinc-300 rounded transition-transform duration-300 ${navOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>

        {/* ── Mobile nav drawer (slide down) ─────────────────────────────── */}
        <nav
          className={`fixed top-0 left-0 w-full bg-[#0c0c14]/98 z-[100] flex flex-col pt-24 pb-10 px-8 border-b border-zinc-800/80 shadow-2xl transition-transform duration-300 md:hidden ${navOpen ? 'translate-y-0' : '-translate-y-full'}`}
          aria-label="Mobile"
        >
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6 text-center block">MENU</span>
          <ul className="flex flex-col gap-6 items-center text-center">
            {navLinks.map(({ key, href }) => (
              <li key={key} className="w-full">
                <a
                  href={href}
                  onClick={() => setNavOpen(false)}
                  className="font-body text-sm font-bold tracking-widest text-zinc-300 hover:text-blue-500 uppercase transition-colors duration-200 block py-2 text-center"
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  )
}
