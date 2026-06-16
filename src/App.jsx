import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="bg-[#0a0a0f] text-zinc-400 min-h-screen">
      <Helmet>
        <title>A. Farkhan Dwi Kusuma | Portfolio</title>
        <meta name="description" content="Portfolio of A. Farkhan Dwi Kusuma — Informatics Engineering student, passionate about Front-End Web Development, UI/UX, and digital marketing." />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
