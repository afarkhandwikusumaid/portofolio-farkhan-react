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

function App() {
  return (
    <div className="bg-[#0a0a0f] text-zinc-400 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
