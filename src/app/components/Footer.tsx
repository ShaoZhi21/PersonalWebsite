'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Heart, ArrowUp, Send } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  const handleEmailClick = () => {
    const subject = `Message from ${name || 'Website Visitor'}`
    const mailtoLink = `mailto:soongshaozhi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ShaoZhi21',
      icon: Github,
      color: 'hover:text-[#0A84FF]'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/soongshaozhi',
      icon: Linkedin,
      color: 'hover:text-[#0A84FF]'
    },
    {
      name: 'Email',
      url: 'mailto:soongshaozhi@gmail.com',
      icon: Mail,
      color: 'hover:text-[#0A84FF]'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Ask Me', href: '#chat' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-[#222222]">
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Get In Touch
            </h2>
            <p className="text-[#E5E5E7] text-xl max-w-3xl mx-auto">
              Let&apos;s work together to bring your ideas to life. I&apos;m always open to discussing new opportunities and exciting projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl bg-[#111111] border border-[#222222]">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Let&apos;s Connect</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:soongshaozhi@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-black hover:bg-[#111111] rounded-lg transition-colors duration-300 border border-[#222222]"
                  >
                    <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center border border-[#222222]">
                      <Mail size={20} className="text-[#0A84FF]" />
                    </div>
                    <div>
                      <p className="text-[#888888] text-sm">Email</p>
                      <p className="font-medium text-[#E5E5E7]">soongshaozhi@gmail.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/soongshaozhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-black hover:bg-[#111111] rounded-lg transition-colors duration-300 border border-[#222222]"
                  >
                    <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center border border-[#222222]">
                      <Linkedin size={20} className="text-[#0A84FF]" />
                    </div>
                    <div>
                      <p className="text-[#888888] text-sm">LinkedIn</p>
                      <p className="font-medium text-[#E5E5E7]">linkedin.com/in/soongshaozhi</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-4 p-4 bg-black rounded-lg border border-[#222222]">
                    <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center border border-[#222222]">
                      <MapPin size={20} className="text-[#0A84FF]" />
                    </div>
                    <div>
                      <p className="text-[#888888] text-sm">Location</p>
                      <p className="font-medium text-[#E5E5E7]">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-12 h-12 bg-[#111111] border border-[#222222] rounded-lg flex items-center justify-center text-[#E5E5E7] hover:text-[#0A84FF] transition-all duration-300 hover:border-[#0A84FF] hover:scale-110 shadow-lg"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl bg-[#111111] border border-[#222222]"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me A Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#888888] text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-[#222222] rounded-xl text-[#E5E5E7] placeholder-[#666666] focus:outline-none focus:border-[#0A84FF] transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#888888] text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-[#222222] rounded-xl text-[#E5E5E7] placeholder-[#666666] focus:outline-none focus:border-[#0A84FF] transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  onClick={handleEmailClick}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#0A84FF] hover:bg-[#0A84FF]/90 transition-colors duration-300 rounded-xl text-white font-medium shadow-lg"
                >
                  <Mail size={20} />
                  <span>Open Mail App</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">
          {/* About */}
          <div className="text-center">
            <h3 className="text-[#E5E5E7] font-bold mb-4">Shao Zhi</h3>
            <p className="text-[#888888] leading-relaxed">
              A passionate Computer Science student and full-stack developer focused on creating innovative solutions and building amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-[#E5E5E7] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Achievements', href: '#achievements' },
                { name: 'Ask Me', href: '#chat' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#888888] hover:text-[#0A84FF] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-[#E5E5E7] font-bold mb-4">Contact</h3>
            <div className="space-y-4 inline-flex flex-col items-center">
              <a
                href="mailto:soongshaozhi@gmail.com"
                className="flex items-center space-x-2 text-[#888888] hover:text-[#0A84FF] transition-colors duration-300"
              >
                <Mail size={16} />
                <span>soongshaozhi@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-[#888888]">
                <MapPin size={16} />
                <span>Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 