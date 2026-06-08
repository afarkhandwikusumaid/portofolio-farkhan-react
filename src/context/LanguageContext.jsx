import React, { createContext, useContext, useState } from 'react'

// ── Translations ──────────────────────────────────────────────────────────────

export const translations = {
  en: {
    nav: {
      home:         'Home',
      about:        'About',
      services:     'Services',
      projects:     'Projects',
      certificates: 'Certificates',
      skills:       'Skills',
      contact:      'Contact',
    },

    hero: {
      hello:        'HELLO, I AM',
      roleTag:      'INFORMATICS ENGINEERING STUDENT',
      shortDesc:    'I help businesses and individuals turn ideas into beautiful and functional digital solutions.',
      viewProjects: 'View Projects',
      downloadCv:   'DOWNLOAD CV',
      cardRole:     'Front-End Web Developer',
      contactMe:    'Contact Me',
    },

    about: {
      label:   'About Me',
      heading: 'FRONT-END WEB DEVELOPER & B2B MARKETING',
      bio1:    'I am an Informatics Engineering student at Dian Nuswantoro University (UDINUS) focusing on Front-End Web Development (React.js). Outside of coding, I have a track record in B2B Marketing, specifically in building engagement and digital marketing strategies for creative production vendors.',
      bio2:    'I currently work as a freelance marketing specialist for yearbook vendor companies. This combination of programming skills and market awareness enables me to approach software development from both angles: clean code architecture and real business/user needs.',
      stats:   ['1 YEAR EXPERIENCE', '5+ PROJECTS', '5 CLIENTS SERVED'],
    },

    services: {
      label:   'Services',
      heading: 'Specialized In',
      items: [
        { title: 'Front-End Web Development', desc: 'Building responsive web applications specializing in React.js and seamless API integrations.' },
        { title: 'B2B Marketing',             desc: 'Developing digital marketing strategies and building engagement for yearbook creative production companies.' },
        { title: 'UI/UX Design',             desc: 'Designing intuitive user journeys, clean interfaces, and custom design systems for modern platforms.' },
      ],
    },

    projects: {
      label:     'Portfolio',
      heading:   'Featured Projects',
      visitSite: 'VISIT SITE',
      items: [
        { title: 'Puri Elena',           desc: 'An elegant digital presence developed for Puri Elena. Incorporating lightweight interfaces and customized client workflow layouts.',                         tags: ['React', 'Tailwind'] },
        { title: 'Peradi Kharisma',     desc: 'Official platform for Peradi Kharisma. Built with a robust layout system to provide clear informational portals and accessibility.',                      tags: ['HTML', 'CSS', 'JS'] },
        { title: 'Pointcut Hair Studio', desc: 'Interactive booking and styling catalogue website for Pointcut Hair Studio. Designed with smooth micro-interactions.',                                   tags: ['React', 'Tailwind'] },
      ],
    },

    certificates: {
      label:   'Showcase',
      heading: 'Certifications',
      items: [
        { title: 'Front-End Web Development',   provider: 'BTNG DNCC', year: '2025', desc: 'Acquired hands-on experience building interactive and responsive web applications with JavaScript.' },
        { title: 'AI Fundamentals',             provider: 'Dicoding',  year: '2025', desc: 'Learned the fundamentals of Artificial Intelligence, including machine learning concepts and neural networks.' },
        { title: 'Web Programming Basics',      provider: 'Dicoding',  year: '2026', desc: 'Learned fundamental web technologies including HTML structure, styling with CSS, and responsive layouts.' },
        { title: 'JavaScript Programming',      provider: 'Dicoding',  year: '2026', desc: 'Learned the fundamentals of JavaScript and ES6 features.' },
        { title: 'Front-End Web Development',   provider: 'Dicoding',  year: '2026', desc: 'Learned the fundamentals of JavaScript and ES6 features.' },
      ],
    },

    skills: {
      label:          'Learning Path',
      heading:        'Skills & Education',
      timelineLabel:  'Education Timeline',
      expertiseLabel: 'Technical Expertise',
      expertiseText:  'I focus on crafting pixel-perfect interfaces and solid web structures. My learning path is oriented around building responsive software systems.',
      education: [
        { institution: 'UNIVERSITAS DIAN NUSWANTORO', program: 'Teknik Informatika', years: '2025 – Now' },
        { institution: 'SMA N 1 BATANG',              program: 'IPA (Science)',       years: '2022 – 2025' },
      ],
      skillBars: [
        { name: 'HTML & CSS'       },
        { name: 'JavaScript'       },
        { name: 'React'            },
        { name: 'Next.js'          },
        { name: 'Technical Analysis'},
        { name: 'Marketing'        },
        { name: 'Communication'    },
        { name: 'Research'         },
        { name: 'Analysis'         },
        { name: 'Problem Solving'  },
      ],
    },

    contact: {
      label:              'Get In Touch',
      heading:            'Contact Me',
      location:           'Semarang, Jawa Tengah, ID',
      nameLabel:          'Name',
      emailLabel:         'Email',
      messageLabel:       'Message',
      namePlaceholder:    'Your Name',
      emailPlaceholder:   'name@example.com',
      messagePlaceholder: 'Tell me about your project...',
      send:               'SEND MESSAGE',
    },

    footer: {
      copy: '© {year} A. Farkhan Dwi Kusuma. All rights reserved.',
    },
  },

  // ── Indonesian ──────────────────────────────────────────────────────────────
  id: {
    nav: {
      home:         'Beranda',
      about:        'Tentang',
      services:     'Layanan',
      projects:     'Proyek',
      certificates: 'Sertifikat',
      skills:       'Keahlian',
      contact:      'Kontak',
    },

    hero: {
      hello:        'HALO, SAYA',
      roleTag:      'MAHASISWA TEKNIK INFORMATIKA',
      shortDesc:    'Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan fungsional.',
      viewProjects: 'Lihat Proyek',
      downloadCv:   'UNDUH CV',
      cardRole:     'Web Developer',
      contactMe:    'Hubungi Saya',
    },

    about: {
      label:   'Tentang Saya',
      heading: 'FRONT-END WEB DEVELOPER & B2B MARKETING',
      bio1:    'Saya adalah mahasiswa Teknik Informatika UDINUS yang berfokus pada pengembangan Front-End Web Development (React.js). Di luar coding, saya memiliki rekam jejak di bidang B2B Marketing, khususnya dalam membangun engagement dan strategi pemasaran digital untuk vendor creative production.',
      bio2:    'Saat ini saya bekerja sebagai freelance marketing untuk perusahaan vendor yearbook. Kombinasi antara pemrograman dan market awareness membuat saya mampu melihat pengembangan perangkat lunak dari dua sisi: arsitektur kode yang bersih dan kebutuhan riil bisnis/pengguna.',
      stats:   ['1 TAHUN PENGALAMAN', '5+ PROYEK', '5 KLIEN DILAYANI'],
    },

    services: {
      label:   'Layanan',
      heading: 'Keahlian Khusus',
      items: [
        { title: 'Front-End Web Development', desc: 'Membangun aplikasi web responsif dengan spesialisasi pada React.js dan integrasi API yang mulus.' },
        { title: 'B2B Marketing',             desc: 'Mengembangkan strategi pemasaran digital dan membangun engagement untuk perusahaan vendor buku tahunan.' },
        { title: 'Desain UI/UX',             desc: 'Merancang perjalanan pengguna yang intuitif, antarmuka yang bersih, dan sistem desain kustom untuk platform modern.' },
      ],
    },

    projects: {
      label:     'Portofolio',
      heading:   'Proyek Unggulan',
      visitSite: 'KUNJUNGI SITUS',
      items: [
        { title: 'Puri Elena',           desc: 'Kehadiran digital elegan yang dikembangkan untuk Puri Elena. Menggabungkan antarmuka ringan dan tata letak alur kerja klien yang disesuaikan.',                    tags: ['React', 'Tailwind'] },
        { title: 'Peradi Kharisma',     desc: 'Platform resmi untuk Peradi Kharisma. Dibangun dengan sistem tata letak yang kokoh untuk menyajikan portal informasi yang jelas dan aksesibel.',                tags: ['HTML', 'CSS', 'JS'] },
        { title: 'Pointcut Hair Studio', desc: 'Website booking interaktif dan katalog gaya untuk Pointcut Hair Studio. Dibangun dengan micro-interaction yang halus.',                                          tags: ['React', 'Tailwind'] },
      ],
    },

    certificates: {
      label:   'Pencapaian',
      heading: 'Sertifikasi',
      items: [
        { title: 'Pengembangan Front-End Web', provider: 'BTNG DNCC', year: '2025', desc: 'Mendapatkan pengalaman praktis membangun aplikasi web interaktif dan responsif menggunakan JavaScript.' },
        { title: 'Dasar AI',                   provider: 'Dicoding',  year: '2025', desc: 'Mempelajari dasar-dasar Kecerdasan Buatan (AI), termasuk konsep pembelajaran mesin dan jaringan saraf.' },
        { title: 'Dasar Pemrograman Web',      provider: 'Dicoding',  year: '2026', desc: 'Mempelajari teknologi web dasar termasuk struktur HTML, styling dengan CSS, dan tata letak responsif.' },
        { title: 'Pemrograman JavaScript',     provider: 'Dicoding',  year: '2026', desc: 'Mempelajari dasar-dasar JavaScript dan fitur ES6.' },
        { title: 'Pengembangan Front-End Web', provider: 'Dicoding',  year: '2026', desc: 'Mempelajari cara membuat web dengan teknologi frontend dan dasar-dasar react.' },
      ],
    },

    skills: {
      label:          'Jalur Belajar',
      heading:        'Keahlian & Pendidikan',
      timelineLabel:  'Timeline Pendidikan',
      expertiseLabel: 'Keahlian Teknis',
      expertiseText:  'Saya berfokus pada pembuatan antarmuka yang presisi dan struktur web yang solid. Jalur belajar saya berorientasi pada pembangunan sistem perangkat lunak yang responsif.',
      education: [
        { institution: 'UNIVERSITAS DIAN NUSWANTORO', program: 'Teknik Informatika',           years: '2025 – Sekarang' },
        { institution: 'SMA N 1 BATANG',              program: 'IPA (Ilmu Pengetahuan Alam)', years: '2022 – 2025' },
      ],
      skillBars: [
        { name: 'HTML & CSS'      },
        { name: 'JavaScript'      },
        { name: 'React'           },
        { name: 'Next.js'         },
        { name: 'Analisis Teknikal'},
        { name: 'Pemasaran'       },
        { name: 'Komunikasi'      },
        { name: 'Penelitian'      },
        { name: 'Analisis'        },
        { name: 'Pemecahan Masalah'},
      ],
    },

    contact: {
      label:              'Hubungi Saya',
      heading:            'Kontak',
      location:           'Semarang, Jawa Tengah, ID',
      nameLabel:          'Nama',
      emailLabel:         'Email',
      messageLabel:       'Pesan',
      namePlaceholder:    'Nama Anda',
      emailPlaceholder:   'nama@contoh.com',
      messagePlaceholder: 'Ceritakan tentang proyek Anda...',
      send:               'KIRIM PESAN',
    },

    footer: {
      copy: '© {year} A. Farkhan Dwi Kusuma. Seluruh hak cipta dilindungi.',
    },
  },
}

// ── Context ───────────────────────────────────────────────────────────────────

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook to access language context.
 * Must be used inside <LanguageProvider>.
 */
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
