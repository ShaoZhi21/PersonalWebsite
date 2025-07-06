'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Chat from './components/Chat'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_var(--background)_60%)] pointer-events-none"></div>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Chat />
      </main>
      <Footer />
    </div>
  )
} 