import React, { createContext, useContext, useState } from 'react'

// ── Translations ──────────────────────────────────────────────────────────────

export const translations = {
  en: {
    nav: {
      home:         'Home',
      about:        'About Me',
      services:     'Services',
      projects:     'Portfolio',
      certificates: 'Showcase',
      skills:       'Learning Path',
      contact:      'Get In Touch',
    },

    hero: {
      hello:        'HELLO, I AM',
      roleTag:      'INFORMATICS ENGINEERING STUDENT',
      shortDesc:    'I help businesses and individuals turn ideas into beautiful and functional digital solutions.',
      viewProjects: 'View Projects',
      downloadCv:   'DOWNLOAD CV',
      cardRole:     'Junior Front-End Web Developer',
      contactMe:    'Contact Me',
    },

    about: {
      label:   'About Me',
      roles: [
        {
          heading: 'JUNIOR FRONT-END WEB DEVELOPER',
          bio1:    'I am an Informatics Engineering student at Dian Nuswantoro University (UDINUS) with a strong passion for Front-End Web Development, specifically in the React.js ecosystem.',
          bio2:    'I am currently deepening my knowledge in modern web technologies. I love exploring new frameworks, refining my coding skills, and continuously learning how to create better, more interactive digital experiences.',
        },
        {
          heading: 'FREELANCE MARKETING SPECIALIST',
          bio1:    'I have a solid track record as a Freelance Marketing Specialist. I focus on developing digital marketing strategies and building strong brand engagement for creative production vendors.',
          bio2:    'I excel in understanding target audiences, crafting compelling campaigns, and utilizing social media platforms to drive growth. My goal is to help businesses connect meaningfully with their clients and boost their brand visibility.',
        }
      ],
      stats:   ['1 YEAR EXPERIENCE', '5+ PROJECTS', '5 CLIENTS SERVED'],
    },

    services: {
      label:   'Services',
      heading: 'Specialized In',
      items: [
        { title: 'Front-End Web Development', desc: 'Building responsive web applications specializing in React.js and seamless API integrations.' },
        { title: 'Freelance Marketing Specialist', desc: 'Developing digital marketing strategies and building engagement for yearbook creative production companies as a freelance specialist.' },
        { title: 'Digital Experience Strategy', desc: 'Combining modern web technology concepts with marketing insights to craft interactive, audience-focused digital experiences.' },
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
        { title: 'Front-End Web Development',   provider: 'Dicoding',  year: '2026', desc: 'Learned how to create a website using frontend technologies and basics of react.' },
        { title: 'Web App with React',          provider: 'Dicoding',  year: '2026', desc: 'Learned how to build UI components, manage state, and leverage modern React features to create interactive and reactive user experiences.' },
        { title: 'Intro to Financial Literacy', provider: 'Dicoding',  year: '2026', desc: 'Learned the basics of financial literacy and how to manage personal finances.' },
        { title: 'Strategy for Self-Development', provider: 'Dicoding', year: '2026', desc: 'Learned the importance of skills and how to improve them.' },
        { title: 'Data Science Fundamental with Microsoft Fabric', provider: 'Dicoding', year: '2026', desc: 'Learned the basics of data science and how to use Microsoft Fabric to analyze data.' },
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
      codingSkills: [
        { name: 'HTML & CSS'       },
        { name: 'JavaScript'       },
        { name: 'React.js'         },
        { name: 'Next.js'          },
        { name: 'Tailwind CSS'     },
      ],
      freelanceSkills: [
        { name: 'Digital Marketing'},
        { name: 'Communication'    },
        { name: 'Market Research'  },
        { name: 'Data Analysis'    },
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
      about:        'Tentang Saya',
      services:     'Layanan',
      projects:     'Portofolio',
      certificates: 'Pencapaian',
      skills:       'Jalur Belajar',
      contact:      'Hubungi Saya',
    },

    hero: {
      hello:        'HALO, SAYA',
      roleTag:      'MAHASISWA TEKNIK INFORMATIKA',
      shortDesc:    'Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan fungsional.',
      viewProjects: 'Lihat Proyek',
      downloadCv:   'UNDUH CV',
      cardRole:     'Junior Front-End Web Developer',
      contactMe:    'Hubungi Saya',
    },

    about: {
      label:   'Tentang Saya',
      roles: [
        {
          heading: 'JUNIOR FRONT-END WEB DEVELOPER',
          bio1:    'Saya adalah mahasiswa Teknik Informatika di Universitas Dian Nuswantoro (UDINUS) dengan minat mendalam pada pengembangan Front-End Web, khususnya dalam ekosistem React.js.',
          bio2:    'Saat ini, saya sedang fokus memperdalam keterampilan saya di bidang teknologi web modern. Saya sangat antusias dalam mengeksplorasi framework baru, mengasah kemampuan coding, dan terus belajar untuk menciptakan karya digital yang interaktif.',
        },
        {
          heading: 'FREELANCE MARKETING SPECIALIST',
          bio1:    'Saya memiliki rekam jejak yang solid sebagai Freelance Marketing Specialist. Saya berfokus pada pengembangan strategi pemasaran digital dan membangun interaksi brand yang kuat untuk vendor produksi kreatif.',
          bio2:    'Saya memiliki keahlian dalam memahami audiens target, merancang kampanye yang memikat, dan memanfaatkan media sosial untuk mendorong pertumbuhan. Tujuan saya adalah membantu bisnis meningkatkan visibilitas brand mereka secara signifikan di dunia digital.',
        }
      ],
      stats:   ['1 TAHUN PENGALAMAN', '5+ PROYEK', '5 KLIEN DILAYANI'],
    },

    services: {
      label:   'Layanan',
      heading: 'Keahlian Khusus',
      items: [
        { title: 'Front-End Web Development', desc: 'Membangun aplikasi web responsif dengan spesialisasi pada React.js dan integrasi API yang mulus.' },
        { title: 'Freelance Marketing Specialist', desc: 'Mengembangkan strategi pemasaran digital dan membangun engagement yang kuat untuk perusahaan produksi kreatif sebagai spesialis lepas.' },
        { title: 'Strategi Pengalaman Digital', desc: 'Menggabungkan eksplorasi teknologi web modern dengan wawasan pemasaran untuk merancang pengalaman digital yang interaktif dan berfokus pada audiens.' },
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
        { title: 'Aplikasi Web dengan React', provider: 'Dicoding',  year: '2026', desc: 'Membangun komponen UI, mengelola state, dan memanfaatkan fitur-fitur modern React untuk menciptakan pengalaman pengguna yang interaktif dan reaktif.' },
        { title: 'Literasi Finansial Dasar',   provider: 'Dicoding',  year: '2026', desc: 'Mempelajari dasar-dasar literasi finansial dan cara mengelola keuangan pribadi.' },
        { title: 'Strategi Pengembangan Diri', provider: 'Dicoding', year: '2026', desc: 'Mempelajari pentingnya skill dan cara meningkatkannya.' },
        { title: 'Dasar Ilmu Data dengan Microsoft Fabric', provider: 'Dicoding', year: '2026', desc: 'Mempelajari dasar-dasar ilmu data dan cara menggunakan Microsoft Fabric untuk menganalisis data.' },

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
      codingSkills: [
        { name: 'HTML & CSS'      },
        { name: 'JavaScript'      },
        { name: 'React.js'        },
        { name: 'Next.js'         },
        { name: 'Tailwind CSS'    },
      ],
      freelanceSkills: [
        { name: 'Digital Marketing'},
        { name: 'Komunikasi'      },
        { name: 'Riset Pasar'     },
        { name: 'Analisis Data'   },
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
