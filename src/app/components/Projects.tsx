'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Smartphone, Database, Video, ShieldCheck, ShoppingBag, Brain, BookOpen, Target, Settings } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CodeOnTheGo',
      description: 'A mobile-first platform improving DSA problem-solving through guided pseudocode, AI feedback, and gamified practice. Features include line-by-line hints, AI feedback, pseudocode to real code conversion with MCQ, and a progressive learning roadmap.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'OpenAI'],
      githubUrl: 'https://github.com/ShaoZhi21/CodeOnTheGo',
      demoUrl: 'https://drive.google.com/file/d/18MHYyOY4YQq3fBP-5f_sGW48bOJpkINO/view?usp=sharing',
      icon: Smartphone,
      image: '/images/CodeOnTheGo.png',
      category: 'Mobile App',
      featured: true,
      status: 'In Progress',
      award: 'Artemis Level Project'
    },
    {
      id: 2,
      title: 'SecretaryAI',
      description: 'An intelligent voice-to-text solution that automatically converts sales conversations into structured CRM data. Uses advanced speech recognition and AI to record conversations, transcribe in real-time, and extract key customer information.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI Whisper', 'Shadcn UI'],
      githubUrl: 'https://github.com/ShaoZhi21/SecretaryAI',
      demoUrl: 'https://www.youtube.com/watch?v=bMD5L6FeyDw',
      icon: Brain,
      image: '/images/secretary-ai.png',
      category: 'Web App',
      featured: true,
      award: '1st Runner Up - Asian Business Plan Competition'
    },
    {
      id: 3,
      title: 'LoveScan',
      description: 'A romance scam prevention application that uses chat, image, and social media analysis to detect potential scams and generate comprehensive reports.',
      technologies: ['React Native', 'Node.js', 'Google Vision API', 'Supabase', 'TypeScript'],
      githubUrl: 'https://github.com/ShaoZhi21/LoveScan',
      icon: ShieldCheck,
      image: '/images/lovescan.png',
      category: 'Mobile App',
      featured: true,
      award: 'Dare to Try Award - DSTA BrainHack Code_EXP'
    },
    {
      id: 4,
      title: 'SaveSpot',
      description: 'Your ultimate location-saving app for explorers and foodies. Seamlessly save videos from TikTok, Instagram, Lemon8, and websites while automatically extracting locations and organizing them into folders.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/ShaoZhi21/SaveSpotMVP',
      demoUrl: 'https://www.youtube.com/shorts/sw6uQladJdE',
      icon: Video,
      image: '/images/savespot.png',
      category: 'Mobile App',
      featured: true,
      event: 'NES Start Phase 2'
    },
    {
      id: 7,
      title: 'StudyPal',
      description: 'An AI-powered learning platform that personalizes education for students while providing teachers with comprehensive analytics. Features adaptive difficulty, multiple question types, real-time analytics dashboards, and role-based access.',
      technologies: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'BKT Analytics'],
      githubUrl: 'https://github.com/Miloepeng/LifeHack',
      demoUrl: 'https://devpost.com/software/studypal-6qzwkv',
      icon: BookOpen,
      image: '/images/studypal.png',
      category: 'Web App',
      featured: true,
      event: 'NUS LifeHack 2025'
    },
    {
      id: 8,
      title: 'NLP Entity Analysis',
      description: 'Developed a comprehensive NLP solution for the SMUBIA Datathon that extracts insights from text data. Features include entity extraction using spaCy, relationship mapping with NetworkX, interactive graph visualization with PyVis, and text summarization using Facebook BART.',
      technologies: ['Python', 'spaCy', 'GloVe', 'NetworkX', 'PyVis', 'BART'],
      icon: Brain,
      image: '/images/smubiadata.png',
      category: 'Data Analytics',
      featured: true,
      event: 'SMUBIA Datathon 2025'
    },
    {
      id: 12,
      title: 'BOB Form in SAF',
      description: 'Identified and developed a use case for Govtech\'s BOB Form system to improve efficiency in SAF operations, streamlining bureaucratic processes.',
      technologies: ['Government Tech', 'Process Optimization', 'System Integration', 'Efficiency Analysis'],
      icon: Settings,
      image: '/images/SAFBoB.png',
      category: 'GovTech',
      featured: true,
      event: 'Govtech Product Hackathon 2025'
    },
    {
      id: 9,
      title: 'ShopBack Product Innovation',
      description: 'Analyzed user needs and product goals to develop innovative features, including an accessible interactive map of partnered stores nearby and real-time alerts for users entering malls.',
      technologies: ['Product Strategy', 'User Research', 'Feature Design', 'Market Analysis'],
      icon: ShoppingBag,
      image: '/images/shopback.png',
      category: 'Product Strategy',
      featured: true,
      event: 'ShopBack Product Hackathon 2025'
    },
    {
      id: 11,
      title: 'AI Credit Scoring System',
      description: 'Proposed an AI-based credit scoring concept using alternative data sources, analyzed feasibility, considered trial evaluations, and formulated a comprehensive go-to-market strategy.',
      technologies: ['AI/ML', 'Financial Technology', 'Data Analytics', 'Business Strategy'],
      icon: Target,
      image: '/images/aicreditscore.png',
      category: 'FinTech',
      featured: true,
      event: 'NUS Ground Zero 2025'
    },
    {
      id: 10,
      title: 'Health for Wealth',
      description: 'Prototyped an innovative app that gamified destressing activities to promote mental wellness and healthy lifestyle habits among users.',
      technologies: ['App Design', 'Gamification', 'Mental Health', 'User Experience'],
      icon: Brain,
      image: '/images/hultprize.png',
      category: 'Mobile App',
      featured: true,
      event: 'Hult Prize 2025'
    },
    {
      id: 5,
      title: 'AI Smart Recipe Generator',
      description: 'A web application that allows users to upload food images, recognize ingredients using OpenAI API, and generate recipes. Features include recipe saving and search functionality.',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/ShaoZhi21/RecipeScanner',
      demoUrl: 'https://www.youtube.com/watch?v=3-vEGYFs9W8',
      icon: Code,
      image: '/images/recipeAI.png',
      category: 'Web App',
      featured: true,
      event: 'HackoMania 2025'
    },
    {
      id: 6,
      title: 'Minimart E-commerce',
      description: 'A web application for Muhammadiyah Welfare Home Minimart, developed during Hack4Good Hackathon. Provides an online platform for managing and selling essential goods with user-friendly interfaces for administrators and customers.',
      technologies: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/ShaoZhi21/Minimart',
      demoUrl: 'https://devpost.com/software/2ne2-minimart',
      icon: ShoppingBag,
      image: '/images/minimart.png',
      category: 'Web App',
      featured: true,
      event: 'Hack4Good Hackathon'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-[#1C1C1E]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-[#E5E5E7] max-w-3xl mx-auto">
            A showcase of my most impactful and innovative projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              {/* Project Image/Background */}
              <div className="relative h-64 bg-gradient-to-br from-[#0A84FF]/20 to-[#5E9EFF]/20">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                <project.icon size={80} className="text-[#0A84FF]/30" />
                  </div>
                )}
                
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0A84FF] hover:bg-[#0A84FF]/90 rounded-full transition-colors duration-300 transform hover:scale-110"
                    >
                      <Github size={24} className="text-white" />
                    </a>
                    {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#5E9EFF] hover:bg-[#5E9EFF]/90 rounded-full transition-colors duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={24} className="text-white" />
                    </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#0A84FF] font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="bg-[#0A84FF]/20 text-[#0A84FF] px-2 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#0A84FF] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[#E5E5E7] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Award or Event Badge */}
                {(project.award || project.event) && (
                  <div className="mb-4">
                    {project.award ? (
                      <span 
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                          ${project.award.includes("Artemis") || 
                            project.award.includes("Runner") || 
                            project.award.includes("Dare to Try") 
                            ? 'bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-black animate-shimmer border border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:shadow-[0_0_25px_rgba(251,191,36,0.7)] transition-shadow duration-300'
                            : 'bg-[#0A84FF]/10 text-[#0A84FF]'
                          }`}
                        style={{
                          backgroundSize: '200% 100%',
                          animation: project.award.includes("Artemis") || 
                                   project.award.includes("Runner") || 
                                   project.award.includes("Dare to Try") 
                                   ? 'shimmer 2s linear infinite' : 'none'
                        }}
                      >
                        {project.award}
                      </span>
                    ) : (
                      <span className="inline-block bg-[#0A84FF]/10 text-[#0A84FF] px-3 py-1 rounded-full text-xs font-medium">
                        {project.event}
                      </span>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-[#2C2C2E] border border-[#888888] px-2 py-1 rounded-full text-[#E5E5E7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#E5E5E7] hover:text-[#0A84FF] transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demoUrl && (
                  <a
                      href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#E5E5E7] hover:text-[#0A84FF] transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                  </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#E5E5E7] mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/ShaoZhi21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0A84FF] hover:bg-[#0A84FF]/90 transition-colors duration-300 rounded-lg text-white font-medium"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 