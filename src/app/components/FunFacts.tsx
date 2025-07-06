'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb, Globe, Heart, Coffee, Gamepad2 } from 'lucide-react'

const FunFacts = () => {
  const facts = [
    {
      id: 1,
      icon: Code,
      title: "Hackathon Enthusiast",
      description: "Participated in 7+ hackathons and counting! I love the adrenaline rush of building something amazing in just 24-48 hours.",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "AI/ML Passionate",
      description: "Fascinated by artificial intelligence and machine learning. I'm constantly exploring new algorithms and their practical applications.",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      icon: Globe,
      title: "Multilingual Developer",
      description: "Fluent in English and Mandarin, which helps me connect with diverse teams and understand global user perspectives.",
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      icon: Heart,
      title: "Problem Solver at Heart",
      description: "I genuinely enjoy tackling complex problems and finding elegant solutions. Every bug is a puzzle waiting to be solved!",
      color: "from-red-400 to-red-600"
    },
    {
      id: 5,
      icon: Coffee,
      title: "Coffee-Powered Coder",
      description: "My coding sessions are fueled by good coffee and great music. Late-night coding with a warm cup is my zen mode.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 6,
      icon: Gamepad2,
      title: "Gaming & Tech Geek",
      description: "When I'm not coding, I enjoy exploring new games and staying updated with the latest tech trends and gadgets.",
      color: "from-indigo-400 to-indigo-600"
    }
  ]

  const interests = [
    "🚀 Space Technology",
    "🤖 Robotics",
    "🎮 Game Development",
    "📱 Mobile UX/UI",
    "🎵 Music Production",
    "📚 Tech Literature",
    "🏃‍♂️ Running",
    "🌍 Traveling"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="fun-facts" className="section-padding bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Fun Facts & Interests</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Beyond coding, here's what makes me tick and drives my passion for technology.
            </p>
          </motion.div>

          {/* Fun Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.id}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${fact.color} opacity-10 rounded-full blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-110`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${fact.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                    <fact.icon className="text-white" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-text-primary">
                    {fact.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Interests */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            {/* Interests List */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Personal Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-xl border border-border/50 hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <span className="text-lg">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Philosophy */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                My Philosophy
              </h3>
              <div className="space-y-4">
                <blockquote className="text-text-secondary italic text-lg border-l-4 border-accent pl-4">
                  "Technology is best when it brings people together and solves real problems."
                </blockquote>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">Continuous Learning:</strong> 
                      The tech world evolves rapidly, and I believe in staying curious and constantly updating my skills.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">Collaboration:</strong> 
                      The best solutions come from diverse perspectives and effective teamwork.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">Impact:</strong> 
                      Code is just a tool; the real value lies in the problems it solves and the lives it improves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Random Fun Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">
                Random Fun Stats
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Lines of Code Written", value: "50K+", emoji: "💻" },
                  { label: "Coffee Cups Consumed", value: "∞", emoji: "☕" },
                  { label: "GitHub Commits", value: "1K+", emoji: "🚀" },
                  { label: "Bug Fixes Celebrated", value: "∞", emoji: "🐛" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-secondary/30 rounded-xl border border-border/50"
                  >
                    <div className="text-3xl mb-2">{stat.emoji}</div>
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-text-muted text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FunFacts 