import React from 'react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const copy = t.footer.copy.replace('{year}', year)

  return (
    <footer className="bg-[#07070a] border-t border-zinc-900 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-body text-xs text-zinc-500 uppercase tracking-widest">{copy}</p>
      </div>
    </footer>
  )
}
