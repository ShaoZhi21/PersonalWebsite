'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [mounted, setMounted] = useState(false)
  const roles = [
    'Full Stack Developer',
    'App Developer',
    'Computer Science Student',
    'Innovator',
    'Problem Solver'
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAI = () => {
    const aiSection = document.querySelector('#chat')
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const profileImageSizes = {
    base: {
      outer: 'w-80 h-80',
      image: 'w-80 h-80',
      glowSize: 'w-[360px] h-[360px]'
    },
    sm: {
      outer: 'sm:w-96 sm:h-96',
      image: 'sm:w-96 sm:h-96',
      glowSize: 'sm:w-[420px] sm:h-[420px]'
    },
    lg: {
      outer: 'lg:w-[480px] lg:h-[480px]',
      image: 'lg:w-[480px] lg:h-[480px]',
      glowSize: 'lg:w-[520px] lg:h-[520px]'
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E] via-black to-black opacity-80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Hi, I&apos;m{' '}
                <span className="gradient-text">
                  Shao Zhi
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#E5E5E7] font-medium h-12 sm:h-14 lg:h-16 flex items-center justify-center lg:justify-start"
              >
                I&apos;m a{' '}
                {mounted && (
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#0A84FF] font-semibold ml-2"
                  >
                    {roles[currentRole]}
                  </motion.span>
                )}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-base sm:text-lg text-[#E5E5E7] max-w-2xl mx-auto lg:mx-0"
              >
                Computer Science student at NUS passionate about creating innovative solutions 
                and building innovative tech solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
              >
                <a
                  href="mailto:soongshaozhi@gmail.com"
                  className="w-full sm:w-auto flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white font-medium rounded-full shadow-lg hover:from-[#1E40AF]/90 hover:to-[#3B82F6]/90 transition-all duration-300 border-2 border-[#1E40AF]"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full sm:w-auto flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-medium rounded-full shadow-lg hover:from-[#8B5CF6]/90 hover:to-[#A855F7]/90 transition-all duration-300 border-2 border-[#8B5CF6]"
                >
                  <span>View Projects</span>
                </a>
                <button
                  type="button"
                  onClick={scrollToAI}
                  className="w-full sm:w-auto flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#34D399] to-[#10B981] text-white font-medium rounded-full shadow-lg hover:from-[#34D399]/90 hover:to-[#10B981]/90 transition-all duration-300 border-2 border-[#34D399]"
                >
                  <MessageCircle size={20} />
                  <span>Ask ShaoAI</span>
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start space-x-6 pt-4"
              >
                <a
                  href="https://github.com/ShaoZhi21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon-hover p-2 border-2 border-[#2C2C2E] rounded-full hover:border-[#0A84FF] transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/soongshaozhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon-hover p-2 border-2 border-[#2C2C2E] rounded-full hover:border-[#0A84FF] transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:soongshaozhi@gmail.com"
                  className="github-icon-hover p-2 border-2 border-[#2C2C2E] rounded-full hover:border-[#0A84FF] transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative flex items-center justify-center group">
              {/* Glow effect */}
              <div className={`absolute ${profileImageSizes.base.glowSize} ${profileImageSizes.sm.glowSize} ${profileImageSizes.lg.glowSize} rounded-full bg-gradient-to-r from-[#0A84FF]/20 via-transparent to-[#5E9EFF]/20 animate-glow-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Rotating border */}
              <div className={`absolute ${profileImageSizes.base.outer} ${profileImageSizes.sm.outer} ${profileImageSizes.lg.outer} rounded-full bg-gradient-to-r from-[#0A84FF] via-[#5E9EFF] to-[#0A84FF] animate-spin-slow opacity-80`}></div>
              
              {/* Main image container */}
              <div className={`relative ${profileImageSizes.base.outer} ${profileImageSizes.sm.outer} ${profileImageSizes.lg.outer} rounded-full p-1 bg-black`}>
                <Image
                  src="/images/profilephoto.jpeg"
                  alt="Soong Shao Zhi"
                  width={400}
                  height={400}
                  className={`${profileImageSizes.base.image} ${profileImageSizes.sm.image} ${profileImageSizes.lg.image} rounded-full border-4 border-[#2C2C2E] shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500`}
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#0A84FF] rounded-full opacity-80 animate-ping-slow"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-[#5E9EFF] rounded-full opacity-70 animate-ping-slow delay-1000"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-[#A1A1A6] rounded-full opacity-60 animate-ping-slow delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down section - perfectly centered */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex flex-col items-center space-y-1"
        >
          <span className="text-[#A1A1A6] text-sm tracking-wide animate-bounce-slow">Scroll down for more</span>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            onClick={scrollToAbout}
            className="p-2 hover:bg-[#2C2C2E] rounded-full transition-colors duration-300"
            >
            <ChevronDown size={24} className="text-[#A1A1A6] animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 