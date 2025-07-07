'use client'

import { motion } from 'framer-motion'
import { Calendar, Target, Award, Code } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollDirection, setScrollDirection] = useState<'right' | 'left'>('right')

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (!scrollContainer) return

      const isAtEnd = scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 10)
      const isAtStart = scrollContainer.scrollLeft <= 10

      if (isAtEnd && scrollDirection === 'right') {
        setScrollDirection('left')
      } else if (isAtStart && scrollDirection === 'left') {
        setScrollDirection('right')
      }

      scrollContainer.scrollLeft += (scrollDirection === 'right' ? 1 : -1)
    }

    const intervalId = setInterval(scroll, 50) // Adjust speed by changing interval

    return () => clearInterval(intervalId)
  }, [scrollDirection])

  const hackathons = [
    { month: 'Jan 2025', name: 'Shopback Product Hackathon' },
    { month: 'Jan 2025', name: 'HackoMania 2025' },
    { month: 'Feb 2025', name: 'Hult Prize' },
    { month: 'Feb 2025', name: 'NUS Hack4Good' },
    { month: 'Mar 2025', name: 'SMUBIA Datathon' },
    { month: 'April 2025', name: 'NES Start Phase 2' },
    { month: 'May 2025', name: 'NUS Ground Zero 2025' },
    { month: 'June 2025', name: 'NUS LifeHack 2025' },
    { month: 'June 2025', name: 'DSTA BrainHack Code_EXP', award: 'Dare to Try Award' },
    { month: 'June 2025', name: 'Asian Business Plan Competition', award: '1st Runner Up' },
    { month: 'June 2025', name: 'Govtech Product Hackathon' }
  ]

  return (
    <section id="achievements" className="section-padding bg-gradient-darker">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Hackathon Journey
            </h2>
            <p className="text-[#E5E5E7] text-lg max-w-2xl mx-auto">
              My competitive programming and innovation journey through various hackathons and competitions.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div 
            ref={scrollRef}
            className="hidden lg:block relative mb-20 overflow-x-auto pb-8 scroll-smooth pt-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="min-w-[2000px] h-[400px] relative">
              {/* Main horizontal line */}
              <div className="absolute top-1/2 left-0 right-[-50px] h-1 bg-[#0A84FF]/20" style={{ top: '50%' }}></div>
              {/* Timeline items */}
              <div className="grid grid-cols-11 relative h-full px-16">
                {hackathons.map((hackathon, index) => {
                  const isUp = index % 2 === 0
                  const isFirst = index === 0
                  const isLast = index === hackathons.length - 1
                  return (
                    <div key={index} className="relative flex flex-col items-center h-full">
                      {/* Dot on the main line */}
                      <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${isFirst ? 'opacity-0' : ''}`}>
                        <div className="w-5 h-5 bg-[#0A84FF] rounded-full border-4 border-black"></div>
                      </div>
                      {/* Vertical connector */}
                      <div
                        className={`absolute left-1/2 w-0.5 bg-[#0A84FF]/30 z-0 ${isFirst ? 'opacity-0' : ''}`}
                        style={isUp
                          ? { 
                              top: 'calc(50% - 2.5px)', 
                              height: 'calc(35% - 10px)',
                              transform: 'translateX(-50%)'
                            }
                          : { 
                              bottom: 'calc(50% - 2.5px)', 
                              height: 'calc(35% - 10px)',
                              transform: 'translateX(-50%)'
                            }
                        }
                      ></div>
                      {/* Card */}
                      <motion.div
                        initial={{ opacity: 0, y: isUp ? -30 : 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`absolute left-1/2 transform -translate-x-1/2 ${isUp ? 'top-4' : 'bottom-4'} z-10`}
                      >
                        <Card className="w-72 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#0A84FF]/25 to-[#0A84FF]/15 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-[#0A84FF]/30">
                          <Badge variant="outline" className="mb-2 text-white border-[#0A84FF]/50">
                            {hackathon.month}
                          </Badge>
                          <h3 className="font-semibold text-lg mb-2 text-white">{hackathon.name}</h3>
                          {hackathon.award && (
                            <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium">
                              {hackathon.award}
                            </Badge>
                          )}
                        </Card>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative mb-20">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#0A84FF]/20"></div>
            <div className="space-y-8">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start ml-4"
                >
                  <div className="w-4 h-4 bg-[#0A84FF] rounded-full border-4 border-black -ml-2 mt-2 flex-shrink-0"></div>
                  <Card className="ml-4 flex-1 p-4 bg-gradient-to-br from-[#0A84FF]/25 to-[#0A84FF]/15 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-[#0A84FF]/30">
                    <Badge variant="outline" className="mb-2 text-white border-[#0A84FF]/50">
                      {hackathon.month}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 text-white">{hackathon.name}</h3>
                    {hackathon.award && (
                      <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium">
                        {hackathon.award}
                      </Badge>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements 