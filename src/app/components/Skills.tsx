'use client'

import { motion } from 'framer-motion'
import { 
  siJavascript,
  siTypescript,
  siPython,
  siMysql,
  siHtml5,
  siCss,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siExpress,
  siTailwindcss,
  siGit,
  siGithub,
  siVim,
  siExpo,
  siSupabase,
  siPostman,
  siFigma,
  siOpenjdk
} from 'simple-icons'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: siOpenjdk },
        { name: 'JavaScript', icon: siJavascript },
        { name: 'TypeScript', icon: siTypescript },
        { name: 'Python', icon: siPython },
        { name: 'MySQL', icon: siMysql },
        { name: 'HTML', icon: siHtml5 },
        { name: 'CSS', icon: siCss },
      ]
    },
    {
      title: 'Libraries/Frameworks',
      skills: [
        { name: 'React', icon: siReact },
        { name: 'React Native', icon: siReact },
        { name: 'Next.js', icon: siNextdotjs },
        { name: 'Node.js', icon: siNodedotjs },
        { name: 'Express.js', icon: siExpress },
        { name: 'Tailwind CSS', icon: siTailwindcss },
        { name: 'spaCy', icon: siPython },
        { name: 'GloVe', icon: siPython },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: siGit },
        { name: 'GitHub', icon: siGithub },
        { name: 'Vim', icon: siVim },
        { name: 'Expo', icon: siExpo },
        { name: 'Supabase', icon: siSupabase },
        { name: 'Postman', icon: siPostman },
        { name: 'Figma', icon: siFigma },
      ]
    }
  ]

  return (
    <section className="py-16 bg-[#1C1C1E]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-lg text-[#E5E5E7] max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl border-2 border-white shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-[#0A84FF]">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center space-y-2 p-3 rounded-lg border-2 border-[#2C2C2E] hover:bg-[#2C2C2E] hover:border-[#0A84FF]/30 transition-all duration-200"
                    title={skill.name}
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-[#0A84FF] group-hover:text-[#5E9EFF] transition-colors duration-200"
                      fill="currentColor"
                    >
                      <path d={skill.icon.path} />
                    </svg>
                    <span className="text-xs text-[#E5E5E7] text-center font-medium leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 