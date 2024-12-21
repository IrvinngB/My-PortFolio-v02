'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { useLanguage } from '../contexts/LanguageContext'

const technologies = [
  { icon: FaHtml5, name: 'HTML' },
  { icon: FaCss3Alt, name: 'CSS' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: FaPython, name: 'Python' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaDatabase, name: 'SQL' },
  { icon: FaGitAlt, name: 'Git' },
  { icon: FaReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
]

const Technologies = () => {
  const { language } = useLanguage()
  return (
    <section id="tecnologias" className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-accent)]"
        >
          {language === 'en' ? 'Technologies' : 'Tecnologías'}
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <tech.icon size={64} className="text-[var(--color-accent)] mb-4" />
              <span className="text-lg font-semibold text-[var(--color-text)]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

