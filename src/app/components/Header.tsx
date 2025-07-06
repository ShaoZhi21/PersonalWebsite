'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Mail, Linkedin, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Ask Me', href: '#chat' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToAI = () => {
    const aiSection = document.querySelector('#chat')
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Brand/Logo - Visible on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:hidden"
          >
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Shao Zhi
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="text-[#E5E5E7] hover:text-[#0A84FF] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={scrollToAI}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-medium rounded-lg shadow-lg hover:from-[#10B981]/90 hover:to-[#34D399]/90 transition-all duration-300 border border-[#10B981]"
            >
              <MessageCircle size={16} />
              <span>Ask ShaoAI</span>
            </motion.button>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://linkedin.com/in/soongshaozhi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0A84FF] hover:bg-[#0A84FF]/80 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Linkedin size={20} className="text-white" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="mailto:soongshaozhi@gmail.com"
              className="apple-button flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Contact</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-[#2C2C2E] rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-t border-[#48484A]"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-[#E5E5E7] hover:text-[#0A84FF] transition-colors duration-300 font-medium py-2 text-base"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-[#48484A] space-y-3">
                  <button
                    onClick={scrollToAI}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-medium rounded-lg shadow-lg hover:from-[#10B981]/90 hover:to-[#34D399]/90 transition-all duration-300 border border-[#10B981] justify-center w-full"
                  >
                    <MessageCircle size={16} />
                    <span>Ask ShaoAI</span>
                  </button>
                  <a
                    href="mailto:soongshaozhi@gmail.com"
                    className="apple-button flex items-center space-x-2 justify-center w-full"
                  >
                    <Mail size={16} />
                    <span>Contact</span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 