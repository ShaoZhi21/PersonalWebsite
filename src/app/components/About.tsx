'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Languages, Rocket, Trophy, Target, Clock } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const stats = [
    { 
      label: 'Projects Completed', 
      value: '7', 
      icon: Rocket,
      href: '#projects'
    },
    { 
      label: 'Awards Won', 
      value: '2', 
      icon: Trophy,
      href: '#projects' 
    },
    { 
      label: 'Tech Stack Mastered', 
      value: '10', 
      icon: Target,
      href: null
    },
    { 
      label: 'Years of Experience', 
      value: '3+', 
      icon: Clock,
      href: null
    },
  ]

  const personalInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Singapore',
      href: null
    },
    {
      icon: Languages,
      label: 'Languages',
      value: 'English, Mandarin',
      href: null
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const standardBorderClass = "border border-[#48484A]/50 hover:border-[#48484A] transition-all duration-300"

  return (
    <section id="about" className="py-20 bg-[#1C1C1E]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-[#E5E5E7] max-w-3xl mx-auto">
            A brief introduction to who I am and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`glass-card p-8 rounded-2xl ${standardBorderClass} shadow-[0_0_15px_rgba(72,72,74,0.3)] hover:shadow-[0_0_20px_rgba(72,72,74,0.5)]`}>
              <h3 className="text-2xl font-bold mb-4 text-[#0A84FF]">Who I Am</h3>
              <p className="text-[#E5E5E7] leading-relaxed mb-6">
                I&apos;m passionate about using technology to drive innovation, solve real-world pain points, 
                and build impactful startups. I love turning everyday problems into practical, scalable 
                solutions that make a difference.
              </p>
              <p className="text-[#E5E5E7] leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new places and enjoying great food—often while 
                dreaming up the next big idea. I believe technology is a powerful force for good, and 
                I&apos;m excited to keep building toward a better future.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className={`glass-card p-4 rounded-xl ${standardBorderClass}`}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center space-x-3 hover:text-[#0A84FF] transition-colors duration-300"
                    >
                      <info.icon size={20} className="text-[#0A84FF]" />
                      <div>
                        <p className="text-xs text-[#A1A1A6] uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="font-medium text-white">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <info.icon size={20} className="text-[#0A84FF]" />
                      <div>
                        <p className="text-xs text-[#A1A1A6] uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="font-medium text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Pitch Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className={`w-[400px] h-[450px] sm:w-[450px] sm:h-[500px] lg:w-[500px] lg:h-[550px] rounded-2xl overflow-hidden ${standardBorderClass} border-4 shadow-[0_0_30px_rgba(10,132,255,0.1)] hover:shadow-[0_0_40px_rgba(10,132,255,0.2)]`}>
                <Image
                  src="/images/pitch.jpg"
                  alt="Soong Shao Zhi presenting"
                  width={500}
                  height={550}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0A84FF] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#5E9EFF] rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#A1A1A6] rounded-full animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                onClick={() => stat.href ? scrollToSection(stat.href) : undefined}
                className={`glass-card p-6 rounded-xl ${standardBorderClass} shadow-[0_0_15px_rgba(10,132,255,0.05)] hover:shadow-[0_0_20px_rgba(10,132,255,0.1)] ${stat.href ? 'cursor-pointer hover:bg-[#2C2C2E] hover:border-[#0A84FF]/30' : ''}`}
              >
                <div className="w-12 h-12 bg-[#0A84FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-[#0A84FF]" />
                </div>
                <div className="text-3xl font-bold text-[#0A84FF] mb-2">{stat.value}</div>
                <div className="text-[#E5E5E7] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 