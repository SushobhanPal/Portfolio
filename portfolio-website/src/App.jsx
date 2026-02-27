import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Leadership />
      <Contact />
    </div>
  )
}

export default App
