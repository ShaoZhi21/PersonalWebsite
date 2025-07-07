'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

const coreCourses = [
  'CS2040S Data Structures & Algorithms',
  'CS2030S Object Oriented Programming',
  'CS1231S Discrete Structures',
  'MA1521 Calculus for Computing',
  'MA1522 Linear Algebra',
  'CS1101S Introduction to Programming Methodology',
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <p className="text-xl text-[#E5E5E7] max-w-3xl mx-auto">
            My academic foundation in Computer Science
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#1C1C1E] rounded-2xl p-8 md:p-12 hover:border-[#0A84FF]/30 transition-colors duration-300 shadow-2xl border-2 border-[#2C2C2E]">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* University Logo */}
              <div className="flex justify-center md:justify-start">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg">
                  <Image
                    src="/images/nus_logo.png"
                    alt="NUS Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  National University of Singapore
                </h3>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                  Bachelor of Computing in Computer Science
                </h4>
                <p className="text-base md:text-lg font-bold text-white mt-2 mb-4 tracking-wide">
                  Honours (Distinction)
                </p>
                
                <div className="flex flex-col items-center md:items-start space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-[#0A84FF]" size={18} />
                    <span className="text-[#E5E5E7]">August 2024 – May 2028</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-[#0A84FF]" size={18} />
                    <span className="text-[#E5E5E7]">Singapore</span>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-[#1C1C1E] rounded-2xl p-8 shadow-2xl border-2 border-[#2C2C2E]">
            <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
              Core Coursework
            </h3>
            <div className="grid gap-4">
              {coreCourses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-3 py-3 px-4 bg-[#2C2C2E] rounded-xl border-2 border-[#48484A] hover:border-[#0A84FF]/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-[#0A84FF] rounded-full"></div>
                  <span className="text-[#E5E5E7] font-medium">{course}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 