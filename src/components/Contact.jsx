import React from 'react'
import { useLang } from '../context/LanguageContext'

const icons = {
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const contactInfo = [
    { titleKey: 'Location', value: c.location,                      icon: icons.location },
    { titleKey: 'Phone',    value: '(+62) 859 4462 9716',           icon: icons.phone },
    { titleKey: 'Email',    value: 'farkhandwikusuma.id@gmail.com',  icon: icons.email },
  ]

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f] relative overflow-hidden space-grid">
      <div className="green-glow-orb bottom-[-5%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section title */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase">{c.label}</span>
          </div>
          <h2 className="font-heading text-2xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {c.heading}
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Info cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {contactInfo.map((info) => (
              <div key={info.titleKey}
                className="flex items-center gap-5 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors duration-300 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800/80 shrink-0">
                  {info.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">{info.titleKey}</span>
                  <span className="font-body text-xs md:text-sm text-white break-all">{info.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <form action="https://formspree.io/f/meopaneo" method="POST" className="flex flex-col gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-body text-xs text-zinc-500 uppercase tracking-wider mb-2">{c.nameLabel}</label>
                  <input type="text" id="name" name="name" placeholder={c.namePlaceholder} required
                    className="px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-100 font-body text-sm placeholder-zinc-700 transition-colors duration-300" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-body text-xs text-zinc-500 uppercase tracking-wider mb-2">{c.emailLabel}</label>
                  <input type="email" id="email" name="email" placeholder={c.emailPlaceholder} required
                    className="px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-100 font-body text-sm placeholder-zinc-700 transition-colors duration-300" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-body text-xs text-zinc-500 uppercase tracking-wider mb-2">{c.messageLabel}</label>
                <textarea id="message" name="message" rows="6" placeholder={c.messagePlaceholder} required
                  className="px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-100 font-body text-sm placeholder-zinc-700 resize-none transition-colors duration-300" />
              </div>

              <button type="submit"
                className="w-full md:w-auto self-start px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-body text-sm font-bold tracking-wider hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer">
                {c.send}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
